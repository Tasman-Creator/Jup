import { create } from 'zustand'
import * as tokenService from '../services/tokens.service'
import { error } from 'console'

export interface Token {
  address: string
  name: string
  symbol: string
  decimals: number
  icon: string
  tags: string[]
  volume24h: number
  organicScore: number
  organicScoreLabel: string
  freezeAuthority?: string
  mintAuthority?: string
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
}

export const useTokenStore = create<TokenStore>((set) => ({
  tokens: [],
  loading: false,
  selectedSellingToken: {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['community', 'strict', 'verified'],
    volume24h: 1479416980.3020256,
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
    volume24h: 2704436529.0710745,
    organicScore: 98.79627184912334,
    organicScoreLabel: 'high',
  },

  fetchTokens: async () => {
    set({ loading: true })

    try {
      const { data } = await tokenService.getAllTokens()
      set({ tokens: data.tokens, loading: false })
    } catch (error) {
      set({ loading: false })
    }
  },

  searchTokens: async (query: string) => {
    set({ loading: true })

    try {
      const { data } = await tokenService.searchTokens(query)
      set({ tokens: data.tokens, loading: false })
    } catch {
      set({ loading: false })
    }
  },

  setSelectedSellingToken: (token) => set({ selectedSellingToken: token }),
  setSelectedBuyingToken: (token) => set({ selectedBuyingToken: token }),
}))
