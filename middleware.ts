import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const ip =
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        'unknown'

    const ua = request.headers.get('user-agent') || 'unknown'
    const method = request.method
    const url = request.nextUrl.pathname + request.nextUrl.search

    console.log(
        `[${new Date().toISOString()}] ${method} ${url} | ip=${ip} | ua=${ua}`
    )

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
    ],
}