import React from 'react';
import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

interface WrapperProps {
  up?: Breakpoint;
  down?: Breakpoint;
}

const Wrapper = styled.p`
  font-family: 'YesevaOne';
  font-size: 22px;
  margin: 0;
  ${(props: WrapperProps) =>
    props.up &&
    css`
      ${up(props.up)} {
        display: none;
      }
    `}
  ${(props: WrapperProps) =>
    props.down &&
    css`
      ${down(props.down)} {
        display: none;
      }
    `}
`;

const SectionHeader: React.FC<{
  title: string;
  hideBreakpointUp?: Breakpoint;
  hideBreakpointDown?: Breakpoint;
}> = ({ title, hideBreakpointUp, hideBreakpointDown }) => (
  <Wrapper up={hideBreakpointUp} down={hideBreakpointDown}>
    {title}
  </Wrapper>
);

export default SectionHeader;
