import React from 'react';
import { TableButtonStyle } from './button.styles';

export const TableButton = (props) => {
  const { children, onClick, className, color, background } = props;
  return (
    <TableButtonStyle
      type="button"
      onClick={onClick}
      className={className}
      color={color}
      background={background}
    >
      {children}
    </TableButtonStyle>
  );
};
