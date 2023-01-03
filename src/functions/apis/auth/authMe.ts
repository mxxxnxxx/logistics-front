import { axios } from '../../utilities/axiosClient'

export type AuthUser = {
  authFlg: boolean
  id?: string // ログイン済みの場合はユーザ情報が返ってくる
  firstName?: string
  lastName?: string
  email?: string
}

export const getAuthUser = (): Promise<AuthUser> => axios.get('/api/auth/me')
