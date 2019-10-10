import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    min-height: 33vh;
    > div {
        flex: 1;
        padding: 2em;
    }
    .image-column {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .blob {
            width: 100%;
            position: absolute;
            z-index: -1;
        }
        .product-image {
            height: auto;
            max-width: 250px;
        }
    }
`