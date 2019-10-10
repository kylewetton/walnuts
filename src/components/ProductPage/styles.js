import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    > div {
        flex: 1;
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
            height: 120%;
        }
    }
`