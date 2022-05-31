import { AccountData } from '@cardinal/common'
import { StakePoolData } from '@cardinal/staking/dist/cjs/programs/stakePool'
import { getAllStakePools } from '@cardinal/staking/dist/cjs/programs/stakePool/accounts'
import { StakePoolMetadata, stakePoolMetadatas } from 'api/mapping'
import { Footer } from 'common/Footer'
import { Header } from 'common/Header'
import { notify } from 'common/Notification'
import { pubKeyUrl, shortPubKey } from 'common/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import { useEffect, useState } from 'react'
import { FaQuestion } from 'react-icons/fa'

export function Placeholder() {
  return (
    <div className="h-[300px] animate-pulse rounded-lg bg-white bg-opacity-5 p-10"></div>
  )
}

export type StakePool = {
  stakePoolMetadata?: StakePoolMetadata
  stakePoolData: AccountData<StakePoolData>
}

function Home() {
  const { connection, environment } = useEnvironmentCtx()
  const [stakePools, setStakePools] = useState<[StakePool[], StakePool[]]>([
    [],
    [],
  ])
  const [stakePoolsLoaded, setStakePoolsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const setData = async () => {
      try {
        const allStakePoolDatas = await getAllStakePools(connection)
        const [stakePoolsWithMetadata, stakePoolsWithoutMetadata] =
          allStakePoolDatas.reduce(
            (acc, stakePoolData) => {
              const stakePoolMetadata = stakePoolMetadatas.find(
                (md) =>
                  md.stakePoolAddress.toString() ===
                  stakePoolData.pubkey.toString()
              )
              if (stakePoolMetadata) {
                return [
                  [...acc[0], { stakePoolMetadata, stakePoolData }],
                  acc[1],
                ]
              }
              return [acc[0], [...acc[1], { stakePoolData }]]
            },
            [[] as StakePool[], [] as StakePool[]]
          )
        setStakePools([
          stakePoolsWithMetadata.sort((a, b) =>
            a
              .stakePoolMetadata!.name.toString()
              .localeCompare(b.stakePoolMetadata!.name.toString())
          ),
          stakePoolsWithoutMetadata,
        ])
      } catch (e) {
        notify({
          message: `${e}`,
          type: 'error',
        })
      } finally {
        setStakePoolsLoaded(true)
      }
    }
    setData().catch(console.error)
  }, [])

  return (
    <div>
      <Head>
        <title>Stoned Farms</title>
        <meta name="description" content="Stoned Farms Staking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bgImage'></div>
      <div className=' '>
        
        <Header />
        <div
          className="container mx-auto w-full px-16 relative "
          style={{ minHeight: 'calc(100vh - 325px)' }}
        >
          <div className="mb-5 text-lg font-bold pt-28">
          </div>
          <div className="md:max-w-xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-1 ">
            {!stakePoolsLoaded ? (
              <>
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </>
            ) : stakePools[0].length > 0 ? (
              stakePools[0].map(
                (stakePool) =>
                  !stakePool.stakePoolMetadata?.hidden && (
                    <div
                      className="flex h-[300px] cursor-pointer flex-col rounded-lg bg-forestGreen bg-opacity-40 border-white border  p-10 transition-all duration-100 hover:scale-[1.01]"
                      onClick={() =>
                        router.push(
                          `/${
                            stakePool.stakePoolMetadata?.name ||
                            stakePool.stakePoolData.pubkey.toString()
                          }${
                            environment.label !== 'mainnet-beta'
                              ? `?cluster=${environment.label}`
                              : ''
                          }`
                        )
                      }
                    >
                      <div className="text-center font-bold ">
                        Stake Your Goat
                      </div>
                      <div className="text-gray text-center">
                        <a
                          className="text-xs text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                          href={pubKeyUrl(
                            stakePool.stakePoolData.pubkey,
                            environment.label
                          )}
                        >
                        </a>
                      </div>
                      <div className="flex flex-grow items-center justify-center">
                        {stakePool.stakePoolMetadata?.imageUrl && (
                          <img
                            className="max-h-[150px] rounded-md"
                            src='stoned.png'
                            alt={stakePool.stakePoolMetadata.name}
                          />
                        )}
                      </div>
                    </div>
                  )
              )
            ) : (
              'No pools found...'
            )}
          </div>
          {stakePools[1].length > 0 && (
            <>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
