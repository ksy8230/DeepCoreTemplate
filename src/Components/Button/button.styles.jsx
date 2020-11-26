import styled from 'styled-components';
import { theme } from '../../constants';

export const Button = styled.button`
  visibility: ${(props) => (props.visibled ? 'visible' : 'hidden')};
  height: ${(props) => (props.visibled ? 'auto' : '0')};
  text-align: center;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : null)};
  margin: 0;
  display: inline-block;
  border: 0;
  &:hover {
    color: ${theme.blue};
  }
  button[disabled] {
    color: #666;
  }
`;

export const TableButtonStyle = styled.button`
  padding: 5px 10px;
  border-radius: 0.125rem;
  font-size: 14px;
  border: 0;
  letter-spacing: -0.7px;
  ${(props) =>
    props.background
      ? `background-color:${props.background}`
      : 'background:#fff'};
  ${(props) => (props.color ? `color:${props.color}` : 'color:#fff')};

  i {
    display: inline-block;
    margin-right: 3px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  position: relative;
  margin: ${(props) => (props.margin ? `${props.margin}` : '0px')};
  ${(props) => (props.alignRight ? 'text-align:right' : null)};
  ul {
    display: inline-block;
    li {
      display: inline-block;
      ${(props) =>
        props.alignRight ? 'margin-left:10px' : 'margin-right:10px'};
    }
    &.actions {
      position: absolute;
      right: 0;
      li {
        margin: 0 0 0 10px;
      }
    }
  }
`;
