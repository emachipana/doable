import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { IoBan } from "react-icons/io5";

export const Container = styled.div`
  background-color: ${colors.gray.light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  position: relative;
`;

export const Icon = styled(IoBan)`
  position: absolute;
  right: 20px;
  font-size: 22px;
  cursor: pointer;
  color: ${colors.gray.normal};
`;
