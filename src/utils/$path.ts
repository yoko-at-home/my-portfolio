export const pagesPath = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
=======
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
>>>>>>> 42f3a21 (fix linter error)
  "blog": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[id]' as const, query: { id }, hash: url?.hash })
=======
>>>>>>> 02eed8e (fix linter error)
  $url: (url?: { hash?: string }) => ({
    hash: url?.hash,
    pathname: "/" as const,
  }),
  $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/' as const }),
  about: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/about" as const,
<<<<<<< HEAD
=======
>>>>>>> b37a0a2 (fix linter error)
>>>>>>> 02eed8e (fix linter error)
    }),
  },
  blog: {
    $url: (url?: { hash?: string }) => ({
      hash: url?.hash,
      pathname: "/blog" as const,
    }),
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
  },
  "success": {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/success' as const })
  }
}

export type PagesPath = typeof pagesPath
