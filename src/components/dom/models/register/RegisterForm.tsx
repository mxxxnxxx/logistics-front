import { useQuery } from 'react-query'
import { styled } from '@mui/material/styles'
import { css } from '@emotion/css'
import { ButtonRound, Image } from '../../uis'
import LoginBanner from '../../../assets/icon/login/icon_login_banner.svg'
import { mediaQuery, useI18n } from '../../../../functions/hooks'
import { BaseButtonWrapper, BaseTitle, BaseText } from '../../../../functions/themes'
import { getSignup } from '../../../../functions/apis'

const GapWrapper = styled('div')`
    display: grid;
    gap: 30px;
    &.-gap10 {
        gap: 10px;
    }
`
const CustomButtonWrapper = styled(BaseButtonWrapper)`
    ${mediaQuery('sp')} {
        flex-wrap: wrap;
        gap: 30px;
    }
`
const styledIcon = css`
    display: inline-block;
    margin: 0 auto;
    ${mediaQuery('sp')} {
        width: 90%;
    }
`

type RegisterFormProps = {
    close: () => void
}
export const RegisterForm: React.FC<RegisterFormProps> = ({ close }) => {
    const { isJapanese } = useI18n()

    // #FIXMe: referral_token,token,dataが返ってくる場合の使用が不明
    const { data: signup } = useQuery('getSignup', getSignup)

    const onClickRegisterForm = () => {
        if (signup) window.location.replace(signup.login_uri)
    }
    const onClickRegisterFormNoId = () => {
        if (signup) window.location.replace(signup.signup_uri)
    }

    return (
        <GapWrapper>
            <BaseTitle>{isJapanese ? '新規登録' : 'New Member Registration'}</BaseTitle>
            <CustomButtonWrapper>
                <ButtonRound onClick={onClickRegisterForm}>
                    {isJapanese ? 'Machi Pass IDをお持ちの方' : 'if registered Machi Pass'}
                </ButtonRound>
                <ButtonRound onClick={onClickRegisterFormNoId}>
                    {isJapanese ? ' Machi Pass IDをお持ちでない方' : 'if not registered Machi Pass'}
                </ButtonRound>
            </CustomButtonWrapper>

            <GapWrapper>
                <BaseText className='-center'>
                    {isJapanese
                        ? 'update! MARUNOUCHI for workers をご利用いただくためには「Machi Pass」の会員登録が必要です。'
                        : 'To use update! MARUNOUCHI for workers, you need to register as a member of "Machi Pass".'}
                </BaseText>
                <BaseText className='-center'>
                    {isJapanese
                        ? 'Machi Passとは、三菱地所グループが提供する各サービスの統合IDです。 Machi Passの詳細はこちら'
                        : '"Machi Pass" is the integrated ID of each service provided by the Mitsubishi Estate Group. For details pleasecheck here.'}
                </BaseText>
            </GapWrapper>

            <Image src={LoginBanner} className={styledIcon} />

            <BaseButtonWrapper>
                <ButtonRound isReversible onClick={close}>
                    {isJapanese ? '戻る' : 'go back'}
                </ButtonRound>
            </BaseButtonWrapper>
        </GapWrapper>
    )
}
