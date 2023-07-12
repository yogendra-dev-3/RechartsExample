import {Bar,BarChart,Legend,CartesianGrid,XAxis,YAxis,Tooltip} from "recharts"

const data=[
    {name:"2018",react:"32" , angular:"37" ,vue:"60"},
    {name:"2019",react:"38" , angular:"56" ,vue:"48"},
    {name:"2020",react:"43" , angular:"45" ,vue:"36"},
    {name:"2021",react:"55" , angular:"36" ,vue:"42"},
    {name:"2022",react:"80" , angular:"38" ,vue:"27"},
]

const BarChartExample=()=>(<div>
    <BarChart width={500} height={300} data={data}>
            <CartesianGrid  strokeDasharray="3 3"  />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="react"  fill="red"/>
            <Bar dataKey="angular"  fill="green"/>
            <Bar dataKey="vue"  fill="skyblue"/>
            <Legend />
       </BarChart>
</div>)

export default BarChartExample