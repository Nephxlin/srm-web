import { ProductInfoBox, ProductInfoValues, ProductServiceEdit } from '..';
import { editButtonsSchema } from '../settings';
import * as S from '../styles'

export interface ISRMProductiCardProps {
  isEditing?: boolean
}

const CardEdit = ({ isEditing }: ISRMProductiCardProps) => {

  return (
    <S.CardContainerArea isEditing={isEditing}>
      <S.CardContainer>
        <ProductInfoBox />
        <ProductInfoValues isCombatMode={true} actionList={editButtonsSchema.subsFindProduct} />
      </S.CardContainer>
      <ProductServiceEdit />
    </S.CardContainerArea>
  );
};

export default CardEdit