import styled, { css } from "styled-components";

import { taskPriorityTitles, taskStatus } from "@enums";

import Select from "@components/select";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr fit-content(1em);
  height: 16.137em;
  width: 17.75em;
  background-color: ${({ userColor, theme: { colors } }) =>
    userColor || colors.gray};
  border-radius: 1em;
  margin: ${({ theme: { spacing } }) => spacing.stickyTasks.taskMargin};

  ${({ status }) =>
    status === taskStatus.completed &&
    css`
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        content: "";
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 1em;
      }
    `}
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  margin: ${({ margined }) => (margined && "0.85em") || 0};
`;

export const PriorityBar = styled.div`
  background-color: ${({ priority, theme: { colors } }) =>
    priority === taskPriorityTitles.high ? colors.red : "transparent"};
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
  margin-bottom: 0.5em;
`;

export const Label = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: ${({ theme: { fontSize } }) => fontSize.label};
  font-weight: 600;
  text-transform: capitalize;
`;

export const MemberSelect = styled(Select)``;

export const StatusSelect = styled(Select)``;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 8em);
  width: 14.75em;
`;

export const PrioritySelect = styled(Select)``;
