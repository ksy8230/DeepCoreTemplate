import React from 'react';
import { Link } from 'react-router-dom';
import { Style } from './index.styles';
import logo from '../../Components/images/logo.jpg';

const TopNavigationLayout = () => {
  return (
    <Style>
      <div className="wrapper">
        <h2>
          <Link to="/">
            <img alt="" src={logo} />
          </Link>
          {/* 환경변수 REACT_APP_CLIENTLOGO 1일 때 보이기 */}
          {process.env.REACT_APP_CLIENTLOGO === '1' ? (
            <Link to="/">
              <img alt="" src="/images/logo_kisa.png" />
            </Link>
          ) : null}
        </h2>
      </div>
      {/* file upload popup */}
    </Style>
  );
};

export default React.memo(TopNavigationLayout);
