import styled from 'styled-components';

export const FeedbackButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
  padding: 16px;
  padding-top: 0;
  margin: 0;
  list-style: none;
`;

export const FeedbackButton = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 3 - 20px);
  padding: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
