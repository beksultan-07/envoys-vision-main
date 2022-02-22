import React from 'react'
import { XAxis, YAxis, AreaChart, Tooltip, Area, ResponsiveContainer, CartesianGrid } from 'recharts';

type Props = {
    data: Object[],
    color: string;
}

const Rechart:React.FC<Props> = ({data, color}) => {

  return (
    <div>
        <ResponsiveContainer width='100%' height={92}> 
              <AreaChart 
                  data={data} >
                  <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={color} stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <CartesianGrid horizontal vertical={false}/>
                  <XAxis hide/>
                  <YAxis orientation='right'/>
                  <Area layout='horizontal' name='что-то' dataKey="uv" stroke={color} fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
              
          </ResponsiveContainer>
    </div>
  )
}

export default Rechart