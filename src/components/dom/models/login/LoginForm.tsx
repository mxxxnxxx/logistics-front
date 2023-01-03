import { styled } from '@mui/material/styles'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object } from 'yup'
import PersonIcon from '@mui/icons-material/Person'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { ButtonRound, InputText, InputCheckboxGroupControlled } from '../../uis'
import { mediaQuery, useBoolean, useNavigate, useI18n } from '../../../../functions/hooks'
import { useAuth } from '../../../../functions/utilities'
import { BaseButtonWrapper, BaseText, BaseTitle } from '../../../../functions/themes'

const GapWrapper = styled('div')`
    display: grid;
    gap: 30px;
    &.-gap10 {
        gap: 10px;
    }
`
const LocalPairBetween = styled('div')`
    align-items: center;
    display: flex;
    justify-content: space-between;
    ${mediaQuery('sp')} {
        justify-content: center;
    }
`

const CustomText = styled(BaseText)`
    color: blue;
    cursor: pointer;
`

type LoginFormProps = {
    close: () => void
}

type FormData = {
    email: string
    password: string
    remember: string[]
}

export const LoginForm: React.FC<LoginFormProps> = ({ close }) => {
    const { login } = useAuth()
    const { isResponsive } = useBoolean()
    const { pushToSettingResetPassword, pushToTop } = useNavigate()
    const { isJapanese } = useI18n()

    const serverEmptyError = isJapanese
        ? 'メールアドレス（ID）、またはパスワードが違います。半角大文字・小文字を正しく入力してください。'
        : 'Your email address (ID) or password is wrong. Please enter correct one-byte upper and lower case letters.'

    const getSchema = () => {
        return object({
            password: string().required(isJapanese ? 'パスワードを入力してください。' : 'Please enter your password.'),
            email: string().required(isJapanese ? 'メールアドレスを入力してください。' : 'Please enter your email.'),
        })
    }

    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(getSchema()),
        defaultValues: {
            remember: [],
        },
    })

    const handleCheckRemember = (checkedId: string) => {
        const { remember } = getValues()
        return remember.includes(checkedId)
            ? remember?.filter((category) => category !== checkedId)
            : [...(remember ?? []), checkedId]
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const res = await login(data)
            pushToTop()
            window.location.reload()
        } catch (error) {
            if ((error as any)?.status === 401) {
                setError('email', {
                    message: serverEmptyError,
                })
            }
            if ((error as any)?.data?.errors?.email) {
                setError('email', {
                    message: (error as any).data.errors.email[0],
                })
            }
            if ((error as any)?.data?.errors?.password) {
                setError('password', {
                    message: (error as any).data.errors.password[0],
                })
            }
        }
    }

    const onError: SubmitErrorHandler<FormData> = (errors) => {}

    return (
        <GapWrapper>
            <BaseTitle>{isJapanese ? 'ログイン' : 'Login'}</BaseTitle>

            <InputText
                type='email'
                register={register('email')}
                error={'email' in errors}
                helperText={errors.email?.message}
                icon={<PersonIcon />}
                placeholder={isJapanese ? 'ユーザID（メールアドレス）' : 'User ID(email Address)'}
                isLeftIcon
            />
            <GapWrapper className='-gap10'>
                <InputText
                    type='password'
                    register={register('password')}
                    error={'password' in errors}
                    helperText={errors.password?.message}
                    icon={<VpnKeyIcon />}
                    placeholder={isJapanese ? 'パスワード' : 'Password'}
                    isLeftIcon
                />
                <LocalPairBetween>
                    <InputCheckboxGroupControlled
                        checkboxProps={[{ value: 'remember', label: isJapanese ? '保存する' : 'Saved' }]}
                        name='remember'
                        control={control}
                        handleCheck={handleCheckRemember}
                    />
                    {!isResponsive && (
                        <CustomText className='-center -underline' onClick={pushToSettingResetPassword}>
                            {isJapanese ? 'パスワードをお忘れですか？' : 'Forgot password?'}
                        </CustomText>
                    )}
                </LocalPairBetween>
            </GapWrapper>

            <BaseButtonWrapper>
                <ButtonRound isReversible onClick={close}>
                    {isJapanese ? '戻る' : 'go back'}
                </ButtonRound>
                <ButtonRound onClick={handleSubmit(onSubmit, onError)}>{isJapanese ? 'ログイン' : 'Login'}</ButtonRound>
            </BaseButtonWrapper>

            {isResponsive && (
                <CustomText className='-center -underline' onClick={pushToSettingResetPassword}>
                    {isJapanese ? 'パスワードをお忘れですか？' : 'Forgot your password?'}
                </CustomText>
            )}
        </GapWrapper>
    )
}
