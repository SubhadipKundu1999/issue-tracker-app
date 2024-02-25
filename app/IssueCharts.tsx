"use client"

import { Card } from '@radix-ui/themes'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

interface Props{

    open: number,
    in_progress: number,
    closed: number
}

function IssueCharts({open, in_progress, closed}:Props)  {

    const data=[
        {label:'Open', value:open},
        {label:'In Progress', value:in_progress},
        {label:'Closed', value:closed},
    ]
    return (
          <Card>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="label" />
            <YAxis  /> 
            <Bar dataKey="value" barSize={60}  style={{fill:'var(--accent-9)'}} />
            </BarChart>
            </ResponsiveContainer>
          </Card>
    )
}

export default IssueCharts
