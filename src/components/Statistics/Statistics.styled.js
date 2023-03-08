import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
//   align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 3 - 20px);
  padding: 16px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const StatisticsData = styled.p`
  margin: 0;
   `;