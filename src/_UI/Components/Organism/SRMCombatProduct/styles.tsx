import styled from 'styled-components'

interface ICombatProductSelectContainerProps {
  isMobile: boolean
}

export const CombatProductSelectContainer = styled.div<ICombatProductSelectContainerProps>`
  width: 100%;
  background-color: #FBFBFB;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
border-radius: 4px;
display: flex;
${(props) => (props.isMobile ? `
align-items: center;
justify-content: center;
gap: 20px;
justify-items:  center;
flex-direction: column;
padding: 16px;
` : `
align-items: center;
justify-content: space-between;
justify-items:  center;
padding: 8px;
`)};

`