import { CardNumber } from 'components/Molecules/CardNumber'
import * as S from './styles'

export const HomePage = () => {
  return (
    <S.Container>
      <CardNumber>5</CardNumber>
      <CardNumber>5</CardNumber>:<CardNumber>5</CardNumber>
      <CardNumber>5</CardNumber>
    </S.Container>
  )
}
