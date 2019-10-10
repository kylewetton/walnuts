import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 4em;
    min-height: 40vh;
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
        border: 1px solid red;
        align-items: flex-start;
        ul {
            margin: 0; padding: 0;
        }
    }
    .footer-2 {
        border: 1px solid green;
        flex: 2;
        align-items: center;
        p {
            margin: 0;
        }
    }
    .footer-3 {
        border: 1px solid blue;
       align-items: flex-end;
    }
`