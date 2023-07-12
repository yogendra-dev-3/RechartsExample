import {Legend,Line,LineChart,CartesianGrid,XAxis,YAxis,Tooltip} from "recharts"
import "./index.css"
const data=[
    {name:"2018",react:"32" , angular:"37" ,vue:"60"},
    {name:"2019",react:"38" , angular:"56" ,vue:"48"},
    {name:"2020",react:"43" , angular:"45" ,vue:"36"},
    {name:"2021",react:"55" , angular:"36" ,vue:"42"},
    {name:"2022",react:"80" , angular:"38" ,vue:"27"},
]

const RechartsExample =()=>{
    return <div className="recharts">
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="react" stroke="#2196f3" strokeWidth={3} />
            <Line type="monotone" dataKey="angular" stroke="red" strokeWidth={3}  />
            <Line type="monotone" dataKey="vue" stroke="green"  strokeWidth={3} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
}

export default RechartsExample