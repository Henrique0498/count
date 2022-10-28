import { NavBar } from 'components/Organisms/Navbar'

import { TypeTemplateDefault } from './types'

import * as S from './styles'

export const TemplateDefault = ({ children }: TypeTemplateDefault) => {
  return (
    <S.Container className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200">
      <NavBar />
      {children}
    </S.Container>
  )
}
