import { create } from 'zustand'
import * as tokenService from '../services/tokens.service'

/** 24h stats from API (stats24h) */
export interface TokenStats24h {
  priceChange: number
  holderChange: number
  liquidityChange: number
  volumeChange: number
  buyVolume: number
  sellVolume: number
  buyOrganicVolume?: number
  sellOrganicVolume?: number
  numBuys?: number
  numSells?: number
  numTraders?: number
  numOrganicBuyers?: number
  numNetBuyers?: number
}

export interface Token {
  /** Mint address; API may return as `id` */
  address: string
  id?: string
  name: string
  symbol: string
  decimals: number
  icon: string
  tags: string[]
  organicScore: number
  organicScoreLabel: string
  isVerified?: boolean
  /** Total 24h volume (from API or derived from stats24h.buyVolume + stats24h.sellVolume) */
  volume24h?: number
  stats24h?: TokenStats24h
  freezeAuthority?: string
  mintAuthority?: string
  dev?: string
  circSupply?: number
  totalSupply?: number
  holderCount?: number
  fdv?: number
  mcap?: number
  usdPrice?: number
  liquidity?: number
  fees?: number
  createdAt?: string
  firstPool?: { id: string; createdAt: string }
  audit?: Record<string, unknown>
}

function normalizeToken(t: any): Token {
  const stats = t.stats24h
  const volume24h =
    t.volume24h != null
      ? t.volume24h
      : stats
        ? (stats.buyVolume ?? 0) + (stats.sellVolume ?? 0)
        : undefined
  return {
    ...t,
    address: t.address ?? t.id,
    volume24h: volume24h !== undefined && volume24h > 0 ? volume24h : undefined,
    stats24h: stats,
  }
}

interface TokenStore {
  tokens: Token[]
  loading: boolean
  selectedSellingToken: Token
  selectedBuyingToken: Token
  fetchTokens: () => Promise<void>
  searchTokens: (guery: string) => Promise<void>
  setSelectedSellingToken: (token: Token) => void
  setSelectedBuyingToken: (token: Token) => void
  swapTokens: () => void
}

export const useTokenStore = create<TokenStore>((set, get) => ({
  tokens: [],
  loading: false,
  selectedSellingToken: {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['community', 'strict', 'verified'],
    organicScore: 100,
    organicScoreLabel: 'high',
    freezeAuthority: '7dGbd2QZcCKcTndnHcTL8q7SMVXAkp688NTQYwrRCrar',
    mintAuthority: 'BJE5MMbqXjVwjAF7oxwPYXnTXDyspzZyt4vwenNw5ruG',
  },
  selectedBuyingToken: {
    address: 'So11111111111111111111111111111111111111112',
    name: 'Wrapped SOL',
    symbol: 'SOL',
    decimals: 9,
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    tags: ['community', 'strict', 'verified'],
    organicScore: 98.79627184912334,
    organicScoreLabel: 'high',
  },

  fetchTokens: async () => {
    set({ loading: true })

    try {
      const { data } = await tokenService.getAllTokens()
      const raw = Array.isArray(data) ? data : (data?.pools ?? [])
      const tokens = raw.map((t: any) => normalizeToken(t))
      set({ tokens, loading: false })
    } catch (error) {
      set({ loading: false })
    }
  },

  searchTokens: async (query: string) => {
    set({ loading: true })

    try {
      const { data } = await tokenService.searchTokens(query)
      const raw = Array.isArray(data) ? data : (data?.pools ?? [])
      const tokens = raw.map((t: any) => normalizeToken(t))
      set({ tokens, loading: false })
    } catch {
      set({ loading: false })
    }
  },

  setSelectedSellingToken: (token) => set({ selectedSellingToken: token }),
  setSelectedBuyingToken: (token) => set({ selectedBuyingToken: token }),
  swapTokens: () => {
    const selling = get().selectedSellingToken;
    const buying = get().selectedBuyingToken;
    set({
      selectedSellingToken: buying,
      selectedBuyingToken: selling,
    });
  }
}))
