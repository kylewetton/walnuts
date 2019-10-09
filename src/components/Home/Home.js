import React from 'react';
import Intro from './Intro';
import HomeSeries from './HomeSeries';
import HomeProducts from './HomeProducts.js';

const Home = props => {
    return (
        <React.Fragment>
            <Intro data={props.data} />
            <HomeSeries />
            <HomeProducts products={props.products} />
        </React.Fragment>
    )
}

export default Home;