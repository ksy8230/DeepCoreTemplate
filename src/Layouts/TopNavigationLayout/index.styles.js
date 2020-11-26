import styled from 'styled-components';
import { theme } from '../../constants';

export const Style = styled.div`
    z-index: 900;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: ${theme.black};
    box-shadow: 1px 11px 17px -20px rgba(0, 0, 0, 0.43);
    z-index: 2;
    .wrapper {
        position: relative;
        text-align: left;
        line-height: 100px;
        .version {
            position: absolute;
            top: -2px;
            keft: 0;
            left: 64px;
            width: 45px;
            img {
                width: 100%;
            }
        }
        h2 {
            position: relative;
            display: inline-block;
            margin: 6px 0 0 0;
            padding: 0 15px;
            text-align: center;
            a {
                display: inline-block;
                // width:40px;
                margin-right:15px;
            }
            img {
                width:100%;
            }
        }
        .navi-toggle-button {
            color: #252525;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .options-area {
            position: absolute;
            top: 0px;
            right: 15px;
            >ul {
                display: flex;
                margin: 0;
                >li {
                    position: relative;
                    list-style: none;
                    margin-left: 15px;
                    &.upload {
                        button {
                            display: inline-block;
                            height: 35px;
                            border:1px solid ${theme.darkBlue};
                            align-items: center;
                            vertical-align: middle;
                            line-height: 35px;
                            font-size: 13px;
                            border-radius: 3px;
                            color: ${theme.darkBlue};
                            font-weight:700;
                            letter-spacing: -0.7px;
                            padding: 0 10px;
                            &:hover {
                                background:${theme.darkBlue};
                                color:#fff;
                            }
                        }
                    }
                    .item {
                        display: block;
                        button {
                            padding: 0;
                            min-width: 30px;
                        }
                        &.active {
                            i {
                                &.close {
                                    opacity: 1;
                                } 
                                opacity: 0;
                                &.options-icon {
                                    transform :rotate(-45deg);
                                }
                            }
                        }
                        i {
                            font-size:1rem;
                            transition: all 0.4s;
                            &.close {
                                opacity: 0;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }
                    }
                    span {
                        padding: 0 5px 0 5px;
                        font-size:13px;
                        .text-red {
                            font-size: 14px;
                            color: ${theme.orange};
                        }
                    }
                }
                .item-option {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: #fff;
                    border: 1px solid #ddd;
                    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
                    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px,
                    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
                    &.user {
                        width: 150px;
                        button {
                            position: relative;
                            display: block;
                            width: 100%;
                            padding: 0;
                            span {
                                display:block;
                                line-height:50px;
                                font-size: 14px;
                                &:hover {
                                    color:${theme.blue};
                                }
                            }
                        }
                    }
                    &.solution {
                        width: 300px;
                        .option {
                            position: relative;
                            line-height: 25px;
                            display: inline-block;
                            width: 50%;
                            text-align: center;
                            padding: 21px 0px;
                            line-height: 25px;
                            .icon {
                                color: #3a4eff;
                                font-size: 1.5rem;
                            }
                            &:hover {
                                span {
                                color: #3a4eff;
                                }
                            }
                            > a {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                z-index: 1;
                            }
                            span {
                                display: block;
                                color: #9b9b9b;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 500;
                            }
                        }
                    }
                }
        }
    }
`;

export const WrapperStyle = styled.div`
    .item-option {
        width:380px;
        p {
            margin:0;
            line-height: 1rem;
            font-size: 12px;
        }
        button {
            padding: 0.2rem 0.4rem;
            margin: 0 5px 0 0;
            font-size: .81rem;
            background:${theme.blue};
            a {
                display: block;
                line-height: 24px;
                font-size: 12px;
                color:#fff;
                letter-spacing:-0.7px;
            }
        }
        .tool-bar {
            padding: 9px 15px 5px 12px;
            p {
                color: ${theme.blue};
                cursor:pointer;
                font-weight:bold;
            }
        }
        .all-clear {
            padding: 50px 0;
            text-align:center;
            p {
                &:before {
                    display: block;
                    width: 29px;
                    height: 34px;
                    content: "";
                    background: url('/images/bg_pop_notice.png') 0 50% no-repeat;
                    margin: 0 auto 16px;
                }
            }
        }    
    }
    span {
        padding: 0 5px 0 5px;
        font-size:13px;
        .text-red {
            font-size: 14px;
            color: ${theme.orange};
        }
    }
`;
