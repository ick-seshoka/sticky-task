import styled from "styled-components";

import Select from "@components/select";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr fit-content(1em);
  height: 15.635em;
  width: 17.75em;
  background-color: ${({ userColor, theme: { colors } }) =>
    userColor || colors.gray};
  border-radius: 1em;
  margin: ${({ theme: { spacing } }) => spacing.stickyTasks.taskMargin};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  margin: ${({ margined }) => (margined && "0.85em") || 0};
`;

export const StatusBar = styled.div`
  background-color: ${({ statusColor, theme: { colors } }) =>
    statusColor || colors.gray};
  width: 1em;
  height: 100%;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
`;

export const Title = styled.textarea`
  resize: none;
  background: transparent;
  border: none;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.regular};
  font-weight: 600;
  width: 15.25em;
  height: 8.125em;
`;

export const Label = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: ${({ theme: { fontSize } }) => fontSize.label};
  font-weight: 600;
  text-transform: capitalize;
`;

export const MemeberSelect = styled(Select)``;

export const StatusSelect = styled(Select)``;

export const Status = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 8em);
  width: 14.75em;
`;

export const PrioritySelect = styled(Select)``;
