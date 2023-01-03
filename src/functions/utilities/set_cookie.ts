import * as nookies from 'nookies'
import { NextPageContext } from 'next'

export function setCookie(ctx: NextPageContext, token: string) {
    nookies.setCookie(ctx, 'accessToken', token, {
        maxAge: 30 * 24 * 60 * 60,
    })
}

export function destroyCookie(ctx: NextPageContext) {
    nookies.destroyCookie(ctx, 'accessToken')
}
