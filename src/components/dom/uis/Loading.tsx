import { Oval } from 'react-loader-spinner'
import styled from '@emotion/styled'
import * as React from 'react'
import { BaseText } from '../../functions/themes'

const LoadingContainer = styled('div')`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1300;
`

const Backdrop = styled('div')`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  z-index: -1;
`

const Inner = styled('div')`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`
const CustomText = styled(BaseText)`
  padding: 5px;
`
export interface LoadingProps {
  color?: string
}

/**
 * ==========================
 * 対象の一覧・詳細ページ
 * クーポン・イベントセミナー・ジャーナル・アンケート・弁当デリバリー・お知らせ・マイページ
 * ==========================
 */

/**
 * 読み込み系のローディングはライブラリのローディング（バックドロップあり）を使う
 * 追加・更新・削除時のローディングはMUIのローティング（バックドロップなし）を使う
 * https://github.com/mhnpd/react-loader-spinner
 * https://mhnpd.github.io/react-loader-spinner/
 */
export const Loading: React.FC<LoadingProps> = ({ color = '#FFF' }) => {
  return (
    <LoadingContainer>
      <Backdrop>
        <Inner>
          <Oval
            ariaLabel="loading-indicator"
            height={70}
            width={70}
            strokeWidth={3}
            color={color}
            secondaryColor="white"
          />
          <CustomText>loading...</CustomText>
        </Inner>
      </Backdrop>
    </LoadingContainer>
  )
}
