export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/404" as const,
    }),
  },
  $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/' as const }),
  "about": {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/about' as const })
  },
  "blog": {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/blog' as const }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/blog/[id]' as const, query: { id } })
    })
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/contact' as const })
  },
  "portfolio": {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/portfolio' as const }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/portfolio/[id]' as const, query: { id } })
    })
  }
}

export type PagesPath = typeof pagesPath
