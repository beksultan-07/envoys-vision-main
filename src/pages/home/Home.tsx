import React from 'react'
import Premarket from "./premarket";
import Trends from "./Trends";
import Grid from "./grid";
import NoNameBlock from "./NoNameBlock";
import Banner from '../../components/homeComponents/banner/Banner'
import Investing from "./Investing";

const Home:React.FC = () => {
    return (
        <div>
            <Banner/>
            <Premarket/>
            <Trends/>
            <Grid/>
            <NoNameBlock/>
            <Investing/>
        </div>

    )
}

    export default Home


