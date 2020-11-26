import styled from 'styled-components';
import { theme } from '../../constants';

export const Style = styled.div`
  position: fixed;
  top: 100px;
  left: -140px;
  width: 200px;
  height: calc(100% - 100px);
  text-align: left;
  background: ${theme.black};
  z-index: 1;
  &.show {
    left: 0;
    .nav-item-extend {
    }
  }
  &.hide {
    .navi-toggle-button {
      padding: 0;
    }
    .menu-list {
      .menu-item {
        padding: 0.5rem;
        text-align: right;
        .tooltip-icon {
          button {
            color:#fff;
            box-shadow:none;
            >a {
              position:absolute;
              top:0;
              left:0;width:100%;height:100%;
            }
          }
        }
      }
    }
    .menu-item-sub {
      position: absolute;
      right: -200px;
      top: 0;
      width: 200px;
      background: rgba(0, 0, 0, 0.8);
      ul {
        &:after {
          content: '';
          position: absolute;
          top: 24px;
          left: 0;
          width: 1.3rem;
          border-top: 1px dashed hsla(0, 0%, 100%, 0.5);
        }
        &:before {
          content: '';
          position: absolute;
          top: 24px;
          left: 20px;
          bottom: 20px;
          margin-left: -1px;
          border-left: 1px dashed hsla(0, 0%, 100%, 0.5);
        }
        li {
          &:before {
            left: -5px;
          }
          &:hover {
            a {
              color:#fff;
            }
          }
        }
      }
    }
  }
  .navi-toggle-button {
    padding: 0 1rem;
    position: absolute;
    right: 20px;
    bottom: 70px;
    font-size: 1.5rem;
    color: #007bff;
    cursor: pointer;
  }
  //
  .menu-list {
    position: relative;
  }
  .menu-item {
    position:relative;
    margin: 0 0 1px 0;
    box-shadow: none;
    width: 100%;
    text-align: left;
    color: #fff;
    font-size: 0.81rem;
    background: ${theme.black};
    cursor:pointer;

    >a {
      display: block;
      padding: 10px 0 10px 15px;
      &.active {
        color: ${theme.yellow};
        i {
          color: ${theme.yellow};
        }
      }
      &:hover {
        color: ${theme.yellow};
        i {
          color: ${theme.yellow};
        }
      }
    }
    i {
      width: 30px;
      height: 30px;
      margin-right: 5px;
      color:#fff;
      text-align: center;
      line-height: 32px;
      border-radius: 50px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .menu-item-sub {
    ul {
      position: relative;
      &:before {
        border-left: 1px dashed hsla(0, 0%, 100%, 0.5);
        bottom: 20px;
        content: '';
        left: 30px;
        margin-left: -1px;
        position: absolute;
        top: 0;
      }
      li {
        position: relative;
        margin-left: 30px;
        &:before {
          border-top: 1px dashed hsla(0, 0%, 100%, 0.5);
          content: '';
          left: 4px;
          margin-left: -3px;
          position: absolute;
          top: 53%;
          width: 1rem;
        }
        &:hover {
          a {
            color:#fff;
          }
        }
        a {
          display: block;
          padding: 0.84rem 2.14rem 0.84rem 1.525rem;
          color: #ddd;
          font-size: 12px;
          &.active {
            color:#fff;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
