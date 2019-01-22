import React from 'react'
import './Chart.scss'
import Box from '../Box/Box'
import {
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    ResponsiveContainer
} from 'recharts'

const report = ({ data }) => (
    <Box title='Site Traffic Overview'>
        <div className='chart'>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='month' tick={{ fontSize: 14 }} />
                    <YAxis tick={{ fontSize: 14 }} width={40} />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='views'
                        stroke='#30a4ff'
                        fill='rgba(48, 164, 255, 0.2)'
                        dot={{
                            fill: '#30a4ff',
                            stroke: '#FFF',
                            strokeWidth: 2
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </Box>
)

export default report
