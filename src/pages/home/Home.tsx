import React from 'react'
import Premarket from "./premarket";
import Trends from "./Trends";
import Grid from "./grid";
import NoNameBlock from "./NoNameBlock";
import Banner from '../../components/homeComponents/banner/Banner'
import Investing from "./Investing";
import Footer from '../../components/footer/Footer';

type Props = {
    swiperValues: any
}

const Home:React.FC<Props> = (props) => {
    return (
        <div>
            <Banner swiperValues={props.swiperValues}/>
            <Premarket/>
            <Trends/>
            <Grid/>
            {/* <NoNameBlock/> */}
            <Investing/>
        </div>

    )
}

    export default Home


