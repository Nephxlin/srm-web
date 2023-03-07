import { ProductInfoBox, ProductInfoValues } from '..'
import { editButtonsSchema } from '../settings'
import * as S from '../styles'

export interface ISRMProductiCardProps {
  isEditing?: boolean
}

const CardSuggest = () => {
  return (
    <S.CardContainerArea>
      <S.CardContainer>
        <ProductInfoBox />
        <ProductInfoValues isCombatMode={false} actionList={editButtonsSchema.suggetCardButtons} />
      </S.CardContainer>
    </S.CardContainerArea>
  )
}

export default CardSuggest 