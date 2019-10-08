import React from 'react';
import Intro from './Intro';
import HomeSeries from './HomeSeries';
import HomeProducts from './HomeProducts.js';

const Home = () => {
    return (
        <React.Fragment>
            <Intro />
            <HomeSeries />
            <HomeProducts />
        </React.Fragment>
    )
}

export default Home;