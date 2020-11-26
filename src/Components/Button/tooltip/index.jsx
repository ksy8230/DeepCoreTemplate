import React from 'react';
import styled from 'styled-components';
import { MDBTooltip } from 'mdbreact';

const Style = styled.div`
  display: inline-block;
  // line-height: 0;
  vertical-align: top;
  button {
    padding: 0;
    margin: 0;
    color: #252525;
    background-color: transparent !important;
    box-shadow: none;
    i {
      color: #555;
      font-size: 11px;
    }
    &:hover {
      box-shadow: none;
      color: #252525;
      background-color: transparent !important;
    }
  }
  .tooltip {
    padding: 5px 0;
    font-size: 12px;
    border: 0;
    max-width: 500px;
  }
`;

const TooltipButton = (props) => {
  const { children, placement, tooltiparea, className } = props;

  return (
    <Style className={className}>
      <MDBTooltip domElement tag="span" placement={placement}>
        <span>{children}</span>
        <span>{tooltiparea}</span>
      </MDBTooltip>
    </Style>
  );
};

export default TooltipButton;
