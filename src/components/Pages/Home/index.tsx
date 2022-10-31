import { DisplayCount } from 'components/Organisms/DisplayCount'

import * as S from './styles'

export const HomePage = () => {
  return (
    <S.Container>
      <DisplayCount min={55} seconds={50} />
    </S.Container>
  )
}
