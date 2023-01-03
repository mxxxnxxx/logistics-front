import styled from '@emotion/styled'

const breakpoints = {
  iphone5: 320,
  sp: 576,
  tab: 768,
  pc: 1042
} as const

/**
 * mediaQueryの方が直感的に使いやすいのでそちらを採用する
 * deviceもmediaQueryも自動補完（予測変換）できている
 * https://github.com/emotion-js/emotion/blob/main/docs/media-queries.mdx
 */
export const mediaQuery = (key: keyof typeof breakpoints) =>
  `@media (max-width: ${breakpoints[key]}px)`

const SecondTestWrapper = styled('div')`
  color: 'green';
  margin: auto;
  ${mediaQuery('iphone5')} {
    color: 'gray';
  }
  ${mediaQuery('sp')} {
    color: 'hotpink';
  }
`
