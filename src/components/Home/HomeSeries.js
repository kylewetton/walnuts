import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import series from '../../assets/series.png';

const HomeSeries = () => {
    return (<HomeSeriesContainer>
        <div>
            <h2>Introducing the Walnut Series</h2>
            <h3>Packed with everything your body needs.</h3>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
            <strong>Starting at $249.99</strong>
        </div>
        <div>
            <img src={series} />
        </div>
    </HomeSeriesContainer>)
}

const HomeSeriesContainer = styled.div`
    background: radial-gradient(circle at 100%, rgba(211,183,132,1) 32%, rgba(165,140,95,1) 100%);
    padding: 7em;
    display: flex;
    * {color: white;}
    > div {
        flex: 1;
    }
`

export default HomeSeries;