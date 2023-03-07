import styled from "styled-components";
import { ISRMProductiCardProps } from ".";

export const CardContainerArea = styled.div<ISRMProductiCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  max-width: ${(props) => (props.isEditing ? "534px" : "437px")};
  width: ${(props) => (props.isEditing ? "534px" : "100%")};
  background: #fffffd;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CardBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const CardImage = styled.div`
  background-color: "#ffffff";
  min-width: 80px;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const CardTextElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const InfoTextGray = styled.span`
  font-size: 16px;
  color: #78909c;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

interface IInfoOptionsBoxProps {
  dualColumn?: boolean;
}

export const InfoOptionsBox = styled.div<IInfoOptionsBoxProps>`
  height: fit-content;
  ${(props) =>
    props.dualColumn
      ? `
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      `
      : `
  display: flex;
  flex-direction: column;
  `};
`;

export const InfoBoxContent = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  padding: 2px;

  &:hover {
    background-color: #cfd8dc;
    border-radius: 4px;
  }
`;

export const InfoLabelTitle = styled.small`
  font-size: 12px;
  line-height: 16px;
  color: #263238;
`;

interface IInfoLabelPrince {
  isRedText?: boolean;
}

export const InfoLabelPrice = styled.p<IInfoLabelPrince>`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  color: ${(props) => (props.isRedText ? "#b31919" : "#263238")};
`;

export const HRline = styled.hr`
  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #455a64;
`;

export const InputPrice = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 8px;
  gap: 8px;
  width: 84px;
  height: 30px;
  background: #fffffd;
  border: 1px solid #455a64;
  border-radius: 4px;
`;
