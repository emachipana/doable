import styled from "@emotion/styled"

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  transition: .2s ease-in;
  padding: 0.5rem;
  margin: 0.4rem 0;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Division = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
