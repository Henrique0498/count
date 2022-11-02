import * as S from './styles'

export const InputNumber = () => {
  return (
    <S.Container>
      <button className="bg-pink-500"> - </button>
      <input
        type="number"
        name=""
        id=""
        className="border-pink-500 focus:border-y-2"
      />
      <button className="bg-pink-500"> + </button>
    </S.Container>
  )
}
