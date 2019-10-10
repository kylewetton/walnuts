import styled from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../theme';

export const FooterContainer = styled.footer`
    margin-top: 4em;
    height: 33vh;
    min-height: 330px;
    display: flex;
    border-top: 2px solid #F4F1EB;
    > div {
        display: flex;
        flex-direction: column;
        padding: 4em;
        
        flex: 1;
        justify-content: space-between;
    }
    .footer-1 {
        
        align-items: flex-start;
        button {
            margin-bottom: 2em;
        }
        ul {
            margin: 0; padding: 0;
            margin-bottom: 2em;
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
            width: 100%;
            max-width: 200px;
        }
    }
    .footer-2 {
        text-align: center;
        flex: 2;
        align-items: center;
        p {
            margin: 0;
        }
    }
    .footer-3 {
        text-align: right;
       align-items: flex-end;
    }

    @media (max-width: 748px) {
        flex-direction: column;
        height: auto;
        min-height: auto;
        padding: 4em 2em;

        .footer-2 {
            order: -1;
            p, img {
                margin-bottom: 2em;
            }
    
        }

        .footer-1 {
            input {
                margin-bottom: 2em;
            }
        }

        .footer-3 {
            > div {
                margin-bottom: 2em;
            } 
        }
        .footer-1, .footer-2, .footer-3 {
            
            text-align: center;
            justify-content: space-between;
            align-items: center;
            padding: 0;
        }
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

export const IconsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    > img {
        cursor: pointer;
    }
`

export const SignOffContainer = styled.div`
    span, a {
        display: inline-block;
        font-size: 0.8rem;
    }
    span {
        margin-left: 1em;
    }
    a {
        opacity: 0.8;
        text-decoration: underline;
    }
`