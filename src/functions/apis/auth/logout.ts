import { axios } from '../../utilities/axiosClient'

/**
 * 通常のログインのログアウト
 */
export const getLogout = () => axios.post('/api/logout')
