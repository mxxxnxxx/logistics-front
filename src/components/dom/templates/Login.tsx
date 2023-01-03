import { styled } from '@mui/material/styles'
import { css } from '@emotion/css'
import { useEffect, useState } from 'react'
import Logo from '../../assets/icon/icon_update_logo_center.svg'
import { Image } from '../uis'
import { useDisclosure, mediaQuery, useNavigate, useBoolean } from '../../../functions/hooks'
import { LoginForm, MachipassLoginForm } from '../models'
import { useAuth } from '../../../functions/utilities'
import { AuthUser } from '../../../functions/apis/auth/authMe'
import { getMachiPassLogin } from '../../../functions/apis'
import { BaseContainer } from '../../../functions/themes'

const LoginContainer = styled(BaseContainer)`
    padding: 30px 0;
`
const styledLogoIcon = css`
    display: inline-block;
    margin: auto;
    ${mediaQuery('sp')} {
        display: grid;
        margin-bottom: 30px;
        width: 35%;
    }
`

export const Login: React.FC = () => {
    const { isOpen, close, open } = useDisclosure()
    const { user } = useAuth()
    const { pushToTop, pushToRegister } = useNavigate()
    const { isResponsive } = useBoolean()
    const [machipassUri, setMachipassUri] = useState<string>()

    useEffect(() => {
        if ((user as AuthUser)?.authFlg) pushToTop()
    }, [user, pushToTop])

    const asyncFunc = async () => {
        const res = await getMachiPassLogin()
        setMachipassUri(res.uri)
    }
    useEffect(() => {
        asyncFunc()
    }, [])

    return (
        <LoginContainer>
            {isResponsive && <Image src={Logo} className={styledLogoIcon} />}
            {!isOpen && machipassUri && (
                <MachipassLoginForm
                    machipassUri={machipassUri}
                    handleOpenLoginForm={open}
                    handleOpenRegisterForm={pushToRegister}
                />
            )}
            {isOpen && <LoginForm close={close} />}
        </LoginContainer>
    )
}
