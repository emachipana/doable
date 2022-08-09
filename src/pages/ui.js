import styled from "@emotion/styled";
import SimpleBar from "simplebar-react";

export const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  height: 90vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 1rem 0;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Division = styled.div`
  max-width: 230px;
  min-width: 220px;
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Tasks = styled(SimpleBar)`
  height: 330px;
  padding: 12px;
`;

export const LoaderContainer = styled.div`
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
