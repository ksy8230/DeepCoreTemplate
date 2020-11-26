import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const NaviItem = ({ children, to, action }) => {
  const navRef = useRef();
  const onClickAnchor = () => {
    if (action) {
      action();
    }
  };
  return (
    <li>
      <NavLink
        exact
        to={to}
        onClick={onClickAnchor}
        ref={navRef}
        activeClassName="active"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default React.memo(NaviItem);
