import { AirdropMetadata } from './../common/Airdrop'
import { PublicKey } from '@solana/web3.js'
import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Optional config to hide this pool from the main page
  hidden?: boolean
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
  }
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user
  airdrops?: AirdropMetadata[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  {
    name: 'stake',
    displayName: 'Stoned Farms',
    stakePoolAddress: new PublicKey(
      'BdqcbcwaX5YpQPDLh9m9u89QH46WXcnQB5r7vK3h54U4'
    ),
    websiteUrl: 'https://stonedfarms.io/',
    receiptType: ReceiptType.Original,
    maxStaked: 2500,
    imageUrl: 'https://smvkptoniao6opm5dr3gwgm45tyk3hk5dhz4vrsjqyviqqlkwu.arweave.net/k_yqnzc1AHec9nRx2axmc7PCtnV0Z88rGSYYqiEFqtU',
    colors: {
      primary: '#1a1b20',
      secondary: '#344E41',
      accent: '#1fcfb11c',
      fontColor: '#FFFFFF',
    },
  },
]
