import useWindowSize from "../../../../utils/useWindow";
import VS from "../../Atoms/SVGS/VS";
import CardEdit from "../../Molecules/Cards/SRMProductCard/CardEdit";

import CardRival from "../../Molecules/Cards/SRMProductCard/CardRival";
import * as S from './styles'

export default function SRMCombatPorduct() {

  const isMobile = useWindowSize(1250)

  return (
    <div>
      <S.CombatProductSelectContainer isMobile={isMobile}>
        <CardEdit isEditing />
        <VS />
        <CardRival />
      </S.CombatProductSelectContainer>
    </div>
  )
}