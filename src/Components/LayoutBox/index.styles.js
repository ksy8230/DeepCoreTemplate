import styled from 'styled-components';
import { theme } from '../../constants';

export const LayoutTitle = styled.div`
    padding:5px 5px 5px 0;
    ${props => props.noborder ? null : `border-bottom:2px solid ${theme.blue}`};
    p {
        font-weight:600;
        margin: 0;
        font-size: 12px;
    }
`;

export const PageWrapper = styled.div`
    padding:0 1.5rem 10rem !important;
    .cursor {
        cursor:pointer;
    }
`;