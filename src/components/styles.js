import styled from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../theme';

export const FooterContainer = styled.footer`
    margin-top: 4em;
    height: 33vh;
    min-height: 330px;
    display: flex;
    > div {
        display: flex;
        flex-direction: column;
        padding: 4em;
        border-top: 2px solid #F4F1EB;
        flex: 1;
        justify-content: space-between;
    }
    .footer-1 {
        
        align-items: flex-start;
        ul {
            margin: 0; padding: 0;
            list-style: none;
            li {
                padding: 0;
            }
        }
        input {
            border: none;
            border-bottom: 2px solid #68543B;
            padding: 1em 0;
            color: #68543B;
        }
    }
    .footer-2 {
        
        flex: 2;
        align-items: center;
        p {
            margin: 0;
        }
    }
    .footer-3 {
        
       align-items: flex-end;
    }
`

export const Btn = styled.button`
border: 1px solid ${theme.colorBrand};
text-decoration: none;
color: ${theme.colorBrand};
line-height: 1;
padding: 0.75em 1em;
text-transform: uppercase;
transition: 0.25s ease-in-out;
:hover {
    background: ${theme.colorBrand};
    color: white;
}
`

export const BtnLnk = styled(Link)`
    border: 1px solid ${theme.colorBrand};
    text-decoration: none;
    color: ${theme.colorBrand};
    line-height: 1;
    padding: 0.75em 1em;
    text-transform: uppercase;
    transition: 0.25s ease-in-out;
    :hover {
        background: ${theme.colorBrand};
        color: white;
    }
`