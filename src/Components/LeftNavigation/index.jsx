import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBCollapse } from 'mdbreact';
import NaviList from './NaviList';
import NaviItem from './NaviItem';
import { Style } from './index.styles';
import TooltipButton from '../Button/tooltip';
import { route } from '../../constants';
import { MDBTooltip, MDBContainer } from 'mdbreact';
const menu = {
  dataset: 'dataset',
  model: 'model',
};

const LeftNavigation = ({ user, toggleMenu, onToggleButton }) => {
  const [collapseID, setCollapseID] = useState('');

  const toggleCollapse = (id) => () => {
    console.log(id);
    setCollapseID(id !== collapseID ? id : '');
    if (id === menu.dataset) {
      setCollapseID('');
    }
  };

  return (
    <Style className={toggleMenu ? 'show' : 'hide'}>
      <ul>
        <NaviList>
          <div
            id="dataset"
            className="menu-item"
            onClick={toggleCollapse(menu.dataset)}
          >
            {toggleMenu ? (
              <>
                <NavLink exact to={route.dataset}>
                  <i className="fas fa-sitemap"></i> 데이터셋 관리
                </NavLink>
              </>
            ) : (
              <TooltipButton
                className="tooltip-icon"
                placement="right"
                tooltiparea="데이터셋 관리"
              >
                <NavLink exact to={route.dataset}>
                  <i className="fas fa-sitemap"></i>
                </NavLink>
              </TooltipButton>
            )}
          </div>
        </NaviList>
        <NaviList>
          <div
            id="model"
            className="menu-item"
            onClick={toggleCollapse(menu.model)}
          >
            {toggleMenu ? (
              <>
                <NavLink exact to={route.model}>
                  <i className="fas fa-cube"></i> 모델 관리
                </NavLink>
              </>
            ) : (
              <TooltipButton
                className="tooltip-icon"
                placement="right"
                tooltiparea="모델 관리"
              >
                <NavLink exact to={route.model}>
                  <i className="fas fa-cube"></i>
                </NavLink>
              </TooltipButton>
            )}
          </div>
        </NaviList>
      </ul>

      <span className="navi-toggle-button" onClick={onToggleButton}>
        {toggleMenu ? (
          <i className="fas fa-chevron-left"></i>
        ) : (
          <i className="fas fa-th-large"></i>
        )}
      </span>
    </Style>
  );
};

export default LeftNavigation;
