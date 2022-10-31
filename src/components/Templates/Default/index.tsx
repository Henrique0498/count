import { NavBar } from 'components/Organisms/Navbar'

import { TypeTemplateDefault } from './types'

import * as S from './styles'

export const TemplateDefault = ({ children }: TypeTemplateDefault) => {
  return (
    <S.Container className="bg-zinc-900 text-gray-200">
      <NavBar />
      {children}
    </S.Container>
  )
}
