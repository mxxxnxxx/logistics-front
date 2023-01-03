import {
  useNavigate as ReactRouterNavigate,
  useLocation
} from 'react-router-dom'
import { useCallback } from 'react'
import { useI18n } from '.'

export const useNavigate = () => {
  const navigate = ReactRouterNavigate()
  const { pathname } = useLocation()
  const refreshPage = useCallback(() => navigate(0), [navigate])
  const { isJapanese } = useI18n()

  /**
   * ==============================
   * 通常の画面遷移
   * ==============================
   */
  const pushToTop = useCallback(() => {
    navigate(isJapanese ? '/' : '/en/')
  }, [navigate, isJapanese])
  const pushToLp = useCallback(() => {
    navigate(isJapanese ? '/lp' : '/en/lp')
  }, [navigate, isJapanese])
  const pushToLogin = useCallback(() => {
    navigate(isJapanese ? '/login' : '/en/login')
  }, [navigate, isJapanese])
  const pushToContact = useCallback(() => {
    navigate(isJapanese ? '/contact' : '/en/contact')
  }, [navigate, isJapanese])
  const pushToResign = useCallback(() => {
    navigate(isJapanese ? '/resign' : '/en/resign')
  }, [navigate, isJapanese])
  const pushToQuestion = useCallback(() => {
    navigate(isJapanese ? '/question' : '/en/question')
  }, [navigate, isJapanese])
  const pushToTerms = useCallback(() => {
    navigate(isJapanese ? '/terms' : '/en/terms')
  }, [navigate, isJapanese])
  const pushToPrivacyPolicy = useCallback(() => {
    navigate(isJapanese ? '/privacy' : '/en/privacy')
  }, [navigate, isJapanese])
  const pushToSettingPassword = useCallback(() => {
    navigate(isJapanese ? '/setting/password' : '/en/setting/password')
  }, [navigate, isJapanese])
  const pushToSettingEmail = useCallback(() => {
    navigate(isJapanese ? '/setting/email' : '/en/setting/email')
  }, [navigate, isJapanese])
  const pushToSettingProfile = useCallback(() => {
    navigate(isJapanese ? '/additional/input' : '/en/additional/input')
  }, [navigate, isJapanese])
  const pushToSettingResetPassword = useCallback(() => {
    navigate(
      isJapanese ? '/setting/reset/password' : '/en/setting/reset/password'
    )
  }, [navigate, isJapanese])
  const pushToNotification = useCallback(() => {
    navigate(isJapanese ? '/notification' : '/en/notification')
  }, [navigate, isJapanese])
  const pushToEvent = useCallback(() => {
    navigate(isJapanese ? '/event' : '/en/event')
  }, [navigate, isJapanese])
  const pushToQuestionaire = useCallback(() => {
    navigate(isJapanese ? '/questionnaire' : '/en/questionnaire')
  }, [navigate, isJapanese])
  const pushToJournal = useCallback(() => {
    navigate(isJapanese ? '/journal' : '/en/journal')
  }, [navigate, isJapanese])
  const pushToVoucher = useCallback(() => {
    navigate(isJapanese ? '/voucher' : '/en/voucher')
  }, [navigate, isJapanese])
  const pushToMypage = useCallback(() => {
    navigate(isJapanese ? '/mypage' : '/en/mypage')
  }, [navigate, isJapanese])
  const pushToRegister = useCallback(() => {
    navigate(isJapanese ? '/register' : '/en/register')
  }, [navigate, isJapanese])
  const pushToTutorial = useCallback(() => {
    navigate(isJapanese ? '/tutorial' : '/en/tutorial')
  }, [navigate, isJapanese])

  /**
   * ==============================
   * 動的な画面遷移
   * ==============================
   */
  const pushToNotificationDetail = useCallback(
    (id: number) => {
      navigate(isJapanese ? `/notification/${id}` : `/en/notification/${id}`)
    },
    [navigate, isJapanese]
  )
  const pushToPrevious = useCallback(
    (prevPath: string) => {
      navigate(isJapanese ? prevPath : `/en/${prevPath}`)
    },
    [navigate, isJapanese]
  )
  const pushToEventDetail = useCallback(
    (eventId: number) => {
      navigate(isJapanese ? `/event/${eventId}` : `/en/event/${eventId}`)
    },
    [navigate, isJapanese]
  )
  const pushToEventDetailApply = useCallback(
    (eventId: number) => {
      navigate(
        isJapanese
          ? `/event/${eventId}?name=apply`
          : `/en/event/${eventId}?name=apply`
      )
    },
    [navigate, isJapanese]
  )
  const pushToEventDetailConfirm = useCallback(
    (eventId: number) => {
      navigate(
        isJapanese
          ? `/event/${eventId}?name=confirm`
          : `/en/event/${eventId}?name=confirm`
      )
    },
    [navigate, isJapanese]
  )
  const pushToJournalDetail = useCallback(
    (journalId: number) => {
      navigate(
        isJapanese ? `/journal/${journalId}` : `/en/journal/${journalId}`
      )
    },
    [navigate, isJapanese]
  )
  const pushToInfoDetail = useCallback(
    (notificationId: number) => {
      navigate(
        isJapanese
          ? `/notification/${notificationId}`
          : `/en/notification/${notificationId}`
      )
    },
    [navigate, isJapanese]
  )
  const pushToVoucherDetail = useCallback(
    (voucherId: number) => {
      navigate(
        isJapanese ? `/voucher/${voucherId}` : `/en/voucher/${voucherId}`
      )
    },
    [navigate, isJapanese]
  )
  const pushToQuestionnaireDetail = useCallback(
    (questionnaireId: number) => {
      navigate(
        isJapanese
          ? `/questionnaire/${questionnaireId}`
          : `/en/questionnaire/${questionnaireId}`
      )
    },
    [navigate, isJapanese]
  )
  const pushToQuestionnaireDetailAnswered = useCallback(
    (questionnaireId: number) => {
      navigate(
        isJapanese
          ? `/questionnaire/${questionnaireId}/answered`
          : `/en/questionnaire/${questionnaireId}/answered`
      )
    },
    [navigate, isJapanese]
  )

  const pushToItemDetail = useCallback(
    (path: string) => {
      navigate(path)
    },
    [navigate]
  )

  /**
   * ==============================
   * 遷移先にデータを送る画面遷移
   * ==============================
   */
  const pushToEventComplete = useCallback(
    (title: string) => {
      navigate(isJapanese ? '/event/complete' : `/en/event/complete`, {
        state: { prevPath: pathname, status: 'success', data: title }
      })
    },
    [navigate, pathname, isJapanese]
  )
  const pushToQuestionaireComplete = useCallback(() => {
    navigate(
      isJapanese ? '/questionnaire/complete' : `/en/questionnaire/complete`,
      {
        state: { prevPath: pathname, status: 'success' }
      }
    )
  }, [navigate, pathname, isJapanese])
  const pushToResetPasswordComplete = useCallback(() => {
    navigate(
      isJapanese ? '/reset/password/complete' : `/en/reset/password/complete`,
      {
        state: { prevPath: pathname, status: 'success' }
      }
    )
  }, [navigate, pathname, isJapanese])
  const pushToSettingEmailComplete = useCallback(() => {
    navigate(
      isJapanese ? '/setting/email/complete' : `/en/setting/email/complete`,
      {
        state: { prevPath: pathname, status: 'success' }
      }
    )
  }, [navigate, pathname, isJapanese])
  const pushToResignComplete = useCallback(() => {
    navigate(isJapanese ? '/resign/complete' : `/en/resign/complete`, {
      state: { prevPath: pathname, status: 'success' }
    })
  }, [navigate, pathname, isJapanese])
  const pushToMypageCreditComplete = useCallback(() => {
    navigate(
      isJapanese ? '/mypage/credit/complete' : `/mypage/credit/complete`,
      {
        state: { prevPath: pathname, status: 'success' }
      }
    )
  }, [navigate, pathname, isJapanese])
  const pushToMachiLinkComplete = useCallback(() => {
    navigate(isJapanese ? '/machi/link/complete' : `/en/machi/link/complete`, {
      state: { prevPath: pathname, status: 'success' }
    })
  }, [navigate, pathname, isJapanese])
  const pushToSettingResetPasswordComplete = useCallback(
    (data: any) => {
      navigate(
        isJapanese
          ? '/setting/reset/password/complete'
          : `/en/setting/reset/password/complete`,
        {
          state: { prevPath: pathname, status: 'success', data }
        }
      )
    },
    [navigate, pathname, isJapanese]
  )
  const pushToSettingPasswordComplete = useCallback(
    (data: any) => {
      navigate(
        isJapanese
          ? '/setting/password/complete'
          : `/en/setting/password/complete`,
        {
          state: { prevPath: pathname, status: 'success', data }
        }
      )
    },
    [navigate, pathname, isJapanese]
  )
  const pushToMypageProfile = useCallback(() => {
    navigate(isJapanese ? '/mypage' : `/en/mypage`, {
      state: { tab: 'profile' }
    })
  }, [navigate, isJapanese])
  const pushToMypageVoucher = useCallback(() => {
    navigate(isJapanese ? '/mypage' : `/en/mypage`, {
      state: { tab: 'voucher' }
    })
  }, [navigate, isJapanese])
  const pushToMypageJournal = useCallback(() => {
    navigate(isJapanese ? '/mypage' : `/en/mypage`, {
      state: { tab: 'journal' }
    })
  }, [navigate, isJapanese])
  const pushToMypageOrderHistory = useCallback(() => {
    navigate(isJapanese ? '/mypage' : `/en/mypage`, {
      state: { tab: 'orderHistory' }
    })
  }, [navigate, isJapanese])
  const pushToMypageCredit = useCallback(() => {
    navigate(isJapanese ? '/mypage' : `/en/mypage`, {
      state: { tab: 'credit' }
    })
  }, [navigate, isJapanese])

  /**
   * ==============================
   * 英語切り替え対象外（マルデリ）
   * ==============================
   */
  const pushToMarudeli = useCallback(() => {
    navigate('/marudeli')
  }, [navigate])
  const pushToMarudeliTerms = useCallback(() => {
    navigate('/marudeli/terms')
  }, [navigate])
  const pushToMarudeliSpecificCommerce = useCallback(() => {
    navigate('/marudeli/specificCommerce')
  }, [navigate])
  const pushToMarudeliDetailShop = useCallback(
    (id: number) => {
      navigate(`/marudeli/${id}`)
    },
    [navigate]
  )
  const pushToMarudeliDetailProduct = useCallback(
    (shopId: number, productId: number) => {
      navigate(`/marudeli/${shopId}/product/${productId}`)
    },
    [navigate]
  )
  const pushToMarudeliComplete = useCallback(() => {
    navigate('/marudeli/complete', {
      state: { prevPath: pathname, status: 'success' }
    })
  }, [navigate, pathname])
  const pushToMarudeliProcedure = useCallback(() => {
    navigate('/marudeli/procedure', {
      state: { prevPath: pathname }
    })
  }, [navigate, pathname])

  /**
   * ==============================
   * react-routerを使用しない画面遷移（Machipass）
   * ==============================
   */
  const pushToMemberInformation = useCallback(() => {
    window.open('https://id.mec.co.jp/', '_blank')
  }, [])
  const pushToUserReference = useCallback(() => {
    window.open('https://id.mec.co.jp/user/reference', '_blank')
  }, [])
  const pushToUserDeleteConsent = useCallback(() => {
    window.open('https://id.mec.co.jp/user/deleteConsent', '_blank')
  }, [])
  const pushToUpdateForm = useCallback(() => {
    window.open('https://id.mec.co.jp/user/updateForm', '_blank')
  }, [])

  /**
   * ==============================
   * react-routerを使用しない画面遷移
   * ==============================
   */
  const pushToPickupsMarudeli = useCallback(() => {
    window.open('https://www.new-port.jp/pickups/marudeli', '_blank')
  }, [])
  const pushToMarunouchi = useCallback(() => {
    window.open('https://www.marunouchi.com/', '_blank')
  }, [])
  const pushToTwitter = useCallback(() => {
    window.open('https://twitter.com/Marunouchi_com', '_blank')
  }, [])
  const pushToFacebook = useCallback(() => {
    window.open('https://www.facebook.com/marunouchicom/', '_blank')
  }, [])
  const pushToHelp = useCallback(() => {
    window.open('https://id-info.mec.co.jp/help.html', '_blank')
  }, [])
  const pushToPrivacyPdf = useCallback(() => {
    window.open('https://www.mec.co.jp/j/privacy/pdf/reference.pdf', '_blank')
  }, [])
  const pushToPrivacyPopup = useCallback(() => {
    window.open('https://www.mec.co.jp/j/privacy/popup.html', '_blank')
  }, [])
  const pushToPrivacyAnonymous = useCallback(() => {
    window.open(
      'https://www.mec.co.jp/j/privacy/anonymous/index.html',
      '_blank'
    )
  }, [])
  const pushToFinantial = useCallback(() => {
    window.open(
      'https://www.mec.co.jp/j/investor/irlibrary/financial/index.html',
      '_blank'
    )
  }, [])
  const pushToPrivacyBumonTop = useCallback(() => {
    window.open(
      'https://www.mec.co.jp/j/privacy/index.html#bumon_top',
      '_blank'
    )
  }, [])
  const pushToNewCityVisions = useCallback(() => {
    window.open(
      'https://newcityvisions.mec.co.jp/section-01/index.html',
      '_blank'
    )
  }, [])

  /**
   * ==============================
   * react-routerを使用しない動的な画面遷移
   * ==============================
   */
  const pushToLinkPage = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  return {
    navigate,
    refreshPage,
    pushToTop,
    pushToLp,
    pushToLogin,
    pushToSettingResetPassword,
    pushToContact,
    pushToMypage,
    pushToUserReference,
    pushToMarunouchi,
    pushToTwitter,
    pushToFacebook,
    pushToResign,
    pushToPickupsMarudeli,
    pushToQuestion,
    pushToTerms,
    pushToPrivacyPolicy,
    pushToSettingPassword,
    pushToSettingEmail,
    pushToSettingProfile,
    pushToUserDeleteConsent,
    pushToHelp,
    pushToPrivacyPdf,
    pushToPrivacyPopup,
    pushToPrivacyAnonymous,
    pushToFinantial,
    pushToPrivacyBumonTop,
    pushToNotification,
    pushToUpdateForm,
    pushToNewCityVisions,
    pushToMypageProfile,
    pushToEvent,
    pushToNotificationDetail,
    pushToLinkPage,
    pushToMarudeliDetailShop,
    pushToMarudeli,
    pushToMarudeliDetailProduct,
    pushToMarudeliProcedure,
    pushToMypageOrderHistory,
    pushToMypageCredit,
    pushToMarudeliComplete,
    pushToMypageVoucher,
    pushToMypageJournal,
    pushToPrevious,
    pushToEventComplete,
    pushToEventDetail,
    pushToEventDetailApply,
    pushToEventDetailConfirm,
    pushToQuestionaireComplete,
    pushToQuestionaire,
    pushToResetPasswordComplete,
    pushToSettingEmailComplete,
    pushToResignComplete,
    pushToSettingResetPasswordComplete,
    pushToSettingPasswordComplete,
    pushToMypageCreditComplete,
    pushToMachiLinkComplete,
    pushToMarudeliTerms,
    pushToMarudeliSpecificCommerce,
    pushToJournal,
    pushToVoucher,
    pushToJournalDetail,
    pushToInfoDetail,
    pushToVoucherDetail,
    pushToQuestionnaireDetail,
    pushToQuestionnaireDetailAnswered,
    pushToRegister,
    pushToTutorial,
    pushToItemDetail,
    pushToMemberInformation
  }
}
