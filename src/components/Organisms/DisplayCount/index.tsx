import { CardNumber } from 'components/Molecules/CardNumber'
import * as S from './styles'
import { TypeDisplayCount } from './types'

export const DisplayCount = ({ min, seconds }: TypeDisplayCount) => {
  return (
    <S.Container className="text-pink-600">
      <CardNumber>{min}</CardNumber>
      <div className="separator text-gray-300" />
      <CardNumber>{seconds}</CardNumber>
    </S.Container>
  )
}
