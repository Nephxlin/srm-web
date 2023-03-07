import { Grow } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import TooltipZone from "../../../Atoms/ToolTip";
import IconButton from '@mui/material/IconButton';
import * as S from './styles'
import UiModal from "../../Modal";

export interface ISRMProductiCardProps {
  isEditing?: boolean
}

interface IconButtonsSchema {
  title: string;
  icon: React.ReactElement
}

export const IconButtonsSchema = ({ title, icon }: IconButtonsSchema) => {
  return (
    <IconButton >
      <TooltipZone title={title} placement="bottom-end">
        {icon}
      </TooltipZone>
    </IconButton>
  )
}

export const ProductInfoBox = () => {
  return (
    <S.CardBox>
      <S.CardImage />
      <S.CardTextElementsContainer>
        <Typography variant="body1">Coca-Cola Zero <S.InfoTextGray> - 350ml</S.InfoTextGray></Typography>
        <Typography variant="body2" color="text.secondary">
          Refrigerante gaseificado sabor cola sem açúcar
        </Typography>
      </S.CardTextElementsContainer>
    </S.CardBox>
  )
}

interface IProductInfoValuesProps {
  actionList: {
    title: string
    icon: React.ReactElement
    modal?: {
      title: string,
      description: string
    }
  }[]
  // type: "editing" | 'combat' | 'suggest'
  isCombatMode?: boolean
}

interface IModalContentProps {
  title: string
  description: string
}

export const ProductInfoValues = ({ actionList, isCombatMode = false }: IProductInfoValuesProps) => {
  const [showOptionsListComponent, setShowOptionsListComponent] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const modalInitialSettings = {
    title: '',
    description: ''
  }
  const [modalInfo, setModalInfo] = useState<IModalContentProps>(modalInitialSettings)

  function handleOpenModalInfoWorker(modalInfo: IModalContentProps) {
    setOpenModal(!openModal)
    setModalInfo(modalInfo)
  }

  function handleCloseModalInfoWorker() {
    setOpenModal(!openModal)
    setModalInfo(modalInitialSettings)
  }

  return (
    <>
      <S.InfoBox onMouseEnter={() => setShowOptionsListComponent(true)} >
        <TooltipZone title="Rua Parques | São José | SC" placement="bottom-end">
          <S.InfoBoxContent>
            <S.InfoLabelTitle>Komprão</S.InfoLabelTitle>
            <S.InfoLabelPrice isRedText={!isCombatMode}>R$ 3,23</S.InfoLabelPrice>
          </S.InfoBoxContent>
        </TooltipZone>
        {isCombatMode ? (
          <S.InfoBoxContent>
            <S.InfoLabelTitle>Estoque Atual</S.InfoLabelTitle>
            <S.InfoLabelPrice>R$ 8.530</S.InfoLabelPrice>
          </S.InfoBoxContent>
        ) : (
          <S.InfoBoxContent>
            <S.InfoLabelTitle>Fort</S.InfoLabelTitle>
            <S.InfoLabelPrice>R$ 3,50</S.InfoLabelPrice>
          </S.InfoBoxContent>
        )}

      </S.InfoBox>
      {showOptionsListComponent === true && (
        <Grow in={showOptionsListComponent}
          style={{ transformOrigin: '0 0 0' }}
          {...(showOptionsListComponent ? { timeout: 1000 } : {})}>
          <S.InfoOptionsBox dualColumn={actionList.length > 2} onMouseLeave={() => setShowOptionsListComponent(false)}>
            {actionList.map(action => {
              return (
                <div key={action.title} onClick={() => handleOpenModalInfoWorker(action?.modal ? action?.modal : modalInfo)}>
                  <IconButtonsSchema title={action.title} icon={action.icon} />
                </div>
              )
            })}
          </S.InfoOptionsBox>
        </Grow>
      )}

      {
        modalInfo.title && (
          <UiModal size="sm" open={openModal} title={modalInfo?.title} onClose={() => handleCloseModalInfoWorker()} >
            <p>{modalInfo?.description}</p>
          </UiModal>
        )
      }
    </>
  )
}

export const ProductServiceEdit = () => {
  return (
    <>
      <S.HRline />
      <S.InputsContainer>

        <S.InputArea>
          <S.InputLabel>Base</S.InputLabel>
          <S.InputPrice type="text" />
          <strong>18,4333%</strong>
        </S.InputArea>

        <S.InputArea>
          <S.InputLabel>Pack</S.InputLabel>
          <S.InputPrice type="text" />
          <strong>16,1000%</strong>
        </S.InputArea>

        <S.InputArea>
          <S.InputLabel>Promoção</S.InputLabel>
          <S.InputPrice type="text" />
          <strong>16,1000%</strong>
        </S.InputArea>

        <S.InputArea>
          <S.InputLabel>Vuon</S.InputLabel>
          <S.InputPrice type="text" />
          <strong>11,6666%</strong>
        </S.InputArea>

      </S.InputsContainer>
    </>
  )
}