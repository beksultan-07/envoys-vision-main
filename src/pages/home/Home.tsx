import React from 'react'
import Premarket from "./premarket";
import Trends from "./Trends";
import Grid from "./grid";
import NoNameBlock from "./NoNameBlock";

const Home:React.FC = () => {
  return (
    <div>
      <Premarket/>
        <Trends/>
        <Grid/>
      <NoNameBlock/>
    </div>

  )
}

export default Home