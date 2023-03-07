import { ProductInfoBox, ProductInfoValues } from '..'
import { editButtonsSchema } from '../settings'
import * as S from '../styles'

const CardRival = () => {
  return (
    <S.CardContainerArea>
      <S.CardContainer>
        <ProductInfoBox />
        <ProductInfoValues isCombatMode={false} actionList={editButtonsSchema.rivalProduct} />
      </S.CardContainer>
    </S.CardContainerArea>
  )
}

export default CardRival