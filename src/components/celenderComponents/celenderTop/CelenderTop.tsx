import React from 'react'
import { Flex } from '../../../uikit/uikit'

const CelenderTop:React.FC = () => {
  return (
    <Flex style={{width:'100%'}} align="center" justify='space-between'>
        <form action="#">
            <input type="text" />
            <button>
                search
                <img src="" alt="" />
            </button>
        </form>

    </Flex>
  )
}

export default CelenderTop