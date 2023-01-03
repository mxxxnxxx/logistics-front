import { axios } from '../../utilities/axiosClient'

export type AccessToken = {
  message?: string
  access_token: string
  token_type: string
  expires_in: number
}

export type LoginRequest = {
  email: string
  password: string
  remember: string[]
}

export const getLogin = (params: LoginRequest): Promise<AccessToken> =>
  axios.post('/api/login', params)
