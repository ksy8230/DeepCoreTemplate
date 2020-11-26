import styled from 'styled-components';
import { theme } from "../../constants";

export const TableWrapper = styled.div`
    position:relative;
    min-height: ${props => props.height ? `${props.height}px`: null};
    &.scroll {
        thead {
            width: ${props => props.width}px;
            display: block;
            tr {
                width: ${props => props.width}px;
                display: block;
            }
        }
        tr {
            width: ${props => props.width - 6}px;
            display: flex;
        }
        td {
            display: block;
            p {
                word-break:break-all;
            }
        }
        tbody {
            width: ${props => props.width}px;
            display: block;
            height: 335px;
            overflow: auto;
            &::-webkit-scrollbar {
                width: 6px;
                height:6px;
            }
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 3px;
                background-color: #c0c0c0;
            }
            &::-webkit-scrollbar-button {
                width: 0;
                height: 0;
            }
        }
        th:nth-of-type(1),td:nth-of-type(1) {
            width:${props => props.width * (props.col1/100)}px;
        }
        th:nth-of-type(2),td:nth-of-type(2) {
            width:${props => props.width * (props.col2/100)}px;
        }
        th:nth-of-type(3),td:nth-of-type(3) {
            width:${props => props.width * (props.col3/100)}px;
        }
        th:nth-of-type(4),td:nth-of-type(4) {
            width:${props => props.width * (props.col4/100)}px;
        }
        th:nth-of-type(5),td:nth-of-type(5) {
            width:${props => props.width * (props.col5/100)}px;
        }
        th:nth-of-type(6),td:nth-of-type(6) {
            width:${props => props.width * (props.col6/100)}px;
        }
        th:nth-of-type(7),td:nth-of-type(7) {
            width:${props => props.width * (props.col7/100)}px;
        }
        th:nth-of-type(8),td:nth-of-type(8) {
            width:${props => props.width * (props.col8/100)}px;
        }
    }
    table {
        width: 100%;
        border-top: 0;
        tr {
            &.checked {
                background:#eee;
            }
        }
        thead {        
            background: #191e25;
            th {
                padding: ${props => props.thPadding ? props.thPadding  : '5px 0 5px 10px'};
                // border-top: 1px solid #ebedf0;
                border-bottom: 1px solid ${theme.black};
                font-size: 12px;
                color: ${theme.gray};
                font-weight: bold;
                button {
                    font-size: 12px;
                    color: #33a2e5;
                    font-weight: bold;
                }
                &:first-child {
                    border-right: 0;
                }
                .sort {
                    display: inline-block;
                    padding-left: 5px;
                }
                &.center {
                    padding-left: 0;
                    text-align: center;
                }
                &.right {
                    padding: 11px 0px 11px 0;
                    text-align: right;
                }
            }
        }
        tbody {
            tr {
                border-bottom: 1px solid #dbdbdb;
                &:hover {
                    background:#eee;
                    td {
                        .options {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        td {
            position: relative;
            padding: 10px 10px;
            font-size: 12px;
            // border-top: 1px solid #dbdbdb;
            vertical-align: center;
            &.name {
                cursor:pointer;
                &:hover {
                    color:${theme.blue}
                }
            }
            &.right {
                text-align: right;
                padding: 10px 0px 0 0;
            }
            &.center {
                text-align: center;
            }
            &.hash {
                .text-area {
                    position: relative;
                    >div {
                        position : relative;
                        display: inline-block;
                        vertical-align: top;
                    }
                    p.cursor {
                        &:hover {
                            cursor: ${process.env.REACT_APP_DATALIST_DETAIL === '1'
                            ? 'pointer'
                            : 'auto'};
                            color: ${process.env.REACT_APP_DATALIST_DETAIL === '1'
                            ? theme.blue
                            : '#555'};
                        }
                    }
                }
                .copy {
                    position: absolute;
                    top: 0;
                    right: -20px;
                    opacity: 0;
                }
                &:hover {
                    .copy {
                    opacity: 1;
                    }
                }
            }
            .options {
                opacity: 0;
                transition: all 0.3s;
                span {
                    display: inline-block;
                    margin-right: 10px;
                }
                p {
                    transition: all 0.2s;
                }
            }
            .copy {
                display: inline-block;
                margin-left: 5px;
                a {
                    display: inline-block;
                }
            }
            p {
                position:relative;
                margin-bottom: 0;
                font-family: 'OpenSans';
                font-weight:600;
                background: transparent !important;
                word-break:break-all;
                &.red {
                    color: ${theme.red};
                }
                &.orange {
                    color: ${theme.orange};
                }
                &.green {
                    color: ${theme.green};
                }
            }
            .danger {
                color:${theme.red};
            }
            .warning {
                color:${theme.lightOrange};
            }
            .text-blue {
                color:${theme.blue};
            }
            .text-green {
                color:${theme.green};
            }
            .text-gray {
                color:${theme.gray};
            }
            button {
                position:relative;
                padding: 0.2rem 0.4rem;
                margin: 0 5px 0 0;
                box-shadow: none;
                vertical-align: top;
                &.link {
                    >a {
                        position:absolute;
                        top:0;left:0;
                        width:100%;height:100%;
                        z-index:1;
                    }
                }
            }
        }
    }    
    .activate {
        font-size: 20px;
        color: green;
    }
    .deactivate{
        font-size: 20px;
        color: #bfbfbf;
    }
    
`;

export const TableTitle = styled.div`
    position:relative;
    padding-left:15px;
    font-size:15px;
    font-weight:bold;
    color:${theme.gray};
    letter-spacing:-0.7px;
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 0;
        width: 10px;
        height: 10px;
        border: 2px solid #007bff;
        border-radius: 50px;
    }
`;