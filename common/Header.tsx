import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import { Airdrop } from './Airdrop'
import { useStakePoolMetadata } from 'hooks/useStakePoolMetadata'
import { maxWidth, styled } from '@mui/system'
import { AccountConnect } from '@cardinal/namespaces-components'
import { Wallet } from '@saberhq/solana-contrib'
import { useStakePoolId } from 'hooks/useStakePoolId'

export const StyledWalletButton = styled(WalletMultiButton)`
  color: rgb(55, 65, 81, 1);
  &:hover {
    background: none !important;
  }
  .wallet-adapter-button {
    padding: 0px;
  }
`
export const TitleText = styled('div')`
  @media (max-width: 550px) {
    font-size: 14px;
  }
`

export const Header = () => {
  const router = useRouter()
  const ctx = useEnvironmentCtx()
  const wallet = useWallet()
  const stakePoolId = useStakePoolId()
  const { data: stakePoolMetadata } = useStakePoolMetadata()

  return (
    <div>
      <div className="bg-forestGreen-200 p-1.5">
            <h2 
                className="text-gray-200 text-sm text-center tracking-tighter uppercase font-semibold">
                Stoned 
                <span className="text-forestGreen-50 font-bold">
                    Farms
                </span>
            </h2>
          </div>
      <div className='bg-white'>
        <div className={`flex h-20 justify-between max-w-7xl mx-auto px-2 text-black`}>
          
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              href={
                stakePoolMetadata?.websiteUrl ||
                `/${
                  ctx.environment.label !== 'mainnet-beta'
                    ? `?cluster=${ctx.environment.label}`
                    : ''
                }`
              }
              className="flex cursor-pointer text-xl font-semibold text-black hover:text-gray-300"
            >
              {stakePoolMetadata?.imageUrl ? (
                <img className="h-7 w-44 lg:h-8 lg:w-52" src='SFHeader.png' />
              ) : (
                <TitleText>
                  <img className="h-7 w-44 lg:h-8 lg:w-52" src='SFHeader.png' />
                </TitleText>
              )}
            </a>
            {ctx.environment.label !== 'mainnet-beta' && (
              <div className="cursor-pointer rounded-md bg-[#9945ff] p-1 text-[10px] italic text-black">
                {ctx.environment.label}
              </div>
            )}
            {ctx.environment.label !== 'mainnet-beta' ? (
              <div className="mt-0.5">
                <Airdrop />
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="relative my-auto flex items-center align-middle">
            {stakePoolId && stakePoolMetadata ? (
              stakePoolMetadata.links?.map((link) => (
                <a key={link.value} href={link.value}>
                  <p className="my-auto mr-10 hover:cursor-pointer">{link.text}</p>
                </a>
              ))
            ) : (
              <>
                <div
                  onClick={() =>
                    router.push(
                      `/${
                        ctx.environment.label !== 'mainnet-beta'
                          ? `?cluster=${ctx.environment.label}`
                          : ''
                      }`
                    )
                  }
                >
                  
                </div>
              </>
            )}
            {wallet.connected && wallet.publicKey ? (
              <AccountConnect
                connection={ctx.connection}
                environment={ctx.environment.label}
                handleDisconnect={() => wallet.disconnect()}
                wallet={wallet as Wallet}
              />
            ) : (
              <StyledWalletButton
                style={{
                  fontSize: '14px',
                  zIndex: 10,
                  height: '38px',
                  border: 'none',
                  background: 'none',
                  backgroundColor: 'none',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
