import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    margin: 20px 0 0;
    font-size:13px;
    .pagenation-t {
        margin-bottom: 10px;
        span {
            display: inline-block;
            margin: 0 5px;
        }
    }
    .pagination {
        .page-item {
            margin:0 .13rem;
            &.active {
                a {
                    background:#33a2e5;
                }
            }
            a {
                padding: .25rem .55rem !important;
                box-shadow: none !important;
                border-radius: 50px !important;
                &:hover {
                    background:#33a2e5 !important;
                    color:#fff;
                }
            }
        }

    }
`;