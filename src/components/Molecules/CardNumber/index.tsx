import { TypeCardNumber } from './types'

import * as S from './styles'

export const CardNumber = ({ children, className }: TypeCardNumber) => {
  return <S.Container className={className}>{children}</S.Container>
}
