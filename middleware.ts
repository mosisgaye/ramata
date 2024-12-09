import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './next-i18next.config'

export function middleware(request: NextRequest) {
  const locale = request.headers.get('accept-language')?.split(',')?.[0].split('-')?.[0] || i18n.defaultLocale
  
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }
  
  const pathnameHasLocale = i18n.locales.some(
    (loc) => request.nextUrl.pathname.startsWith(`/${loc}/`) || request.nextUrl.pathname === `/${loc}`
  )

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    )
  }

  return NextResponse.next()
}