import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import LeftNavigation from '../Components/LeftNavigation/index';
import TopNavigation from './TopNavigationLayout';
import { Style } from './defaultLayout.styles.js';

const DefaultLayout = ({ component: Component, ...rest }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const onToggleButton = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="default-layout">
          <TopNavigation />
          <Style className={toggleMenu ? '' : 'narrow'}>
            <LeftNavigation
              onToggleButton={onToggleButton}
              toggleMenu={toggleMenu}
            />
            <Component {...matchProps} {...rest} toggleMenu={toggleMenu} />
          </Style>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
