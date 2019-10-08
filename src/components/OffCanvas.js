import React from 'react';
import styled from 'styled-components';

const OffCanvas = props => {
    return (
        <OffCanvasContainer className={props.open ? '--active' : '--closed'}>
            <div>
            <ul>
                <li>Menu item</li>
                <li>Menu item</li>
                <li>Menu item</li>
                <li>Menu item</li>
            </ul>
            </div>
        </OffCanvasContainer>
    )
}

const OffCanvasContainer = styled.div`
    position: fixed;
    z-index: 10;
    background: white;
    width: 0;
    height: 100%;
    top: 0; right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.25s ease-in;
    > div {
        width: 50%;
    }
    &.--active {
        width: 100%;
    }
`

export default OffCanvas;