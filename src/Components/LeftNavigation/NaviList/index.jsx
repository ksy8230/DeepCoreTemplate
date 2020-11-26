import React from 'react';

const NaviList = ({ children }) => {
  return <li className="menu-list">{children}</li>;
};

export default React.memo(NaviList);
