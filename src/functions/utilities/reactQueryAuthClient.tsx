import { initReactQueryAuth } from 'react-query-auth'
import { NextPageContext } from 'next'
import { setCookie, destroyCookie } from 'nookies'
import { Loading } from '../../components/dom/uis'
import { getLogin, getLogout, getAuthUser } from '../apis'
import { AuthUser } from '../apis/auth/authMe'
import { AccessToken } from '../apis/auth/login'

// NOTE:useLoginと同じ型定義
export type LoginRequest = {
    email: string
    password: string
    remember: string[]
}

// NOTE:useLoginと同じ型定義
export type LoginResponse = {
    access_token: string
    token_type: string
    expires_in: number
}

const handleUserResponse = (res: LoginResponse) => {
    const { access_token } = res
    setCookie('jwt', access_token)
    return access_token
}
const loadUser = async () => {
    // tokenの有無の確認
    if (cookies.get('jwt')) {
        // tokenの有効期限の確認
        const data = await getAuthUser()
        return data
    }
    return null
}
const loginFn = async (params: LoginRequest) => {
    const response = await getLogin(params)
    await handleUserResponse(response)
    return response
}
const registerFn = async (params: LoginRequest) => {
    const response = await getLogin(params)
    const user = await handleUserResponse(response)
    return user
}

const logoutFn = async () => {
    await getLogout()
    destroyCookie('jwt')
}

// NOTE:LoaderComponentを使うためにjsx,tsxファイルにする必要がある
// デフォルトだとLoading...になる
const authConfig = {
    loadUser,
    loginFn,
    registerFn,
    logoutFn,
    LoaderComponent() {
        return <Loading />
    },
}

// NOTE:AuthUser | null | string 非同期関数であることが前提
export const { AuthProvider, useAuth } = initReactQueryAuth<
    AuthUser | string | null | undefined | AccessToken,
    unknown,
    LoginRequest,
    LoginRequest
>(authConfig)
