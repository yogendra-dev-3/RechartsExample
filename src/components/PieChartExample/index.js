import {Pie, PieChart,Cell, Tooltip, Legend} from "recharts"

const data=[
    {name:"2018",react:"32" , angular:"37" ,vue:"60"},
    {name:"2019",react:"38" , angular:"56" ,vue:"48"},
    {name:"2020",react:"43" , angular:"45" ,vue:"36"},
    {name:"2021",react:"55" , angular:"36" ,vue:"42"},
    {name:"2022",react:"80" , angular:"38" ,vue:"27"},
]

const data2 = [
    {
      "name": "react",
      "value": 400
    },
    {
      "name": "angular",
      "value": 300
    },
    {
      "name": "vue",
      "value": 500
    },
    
  ]

const colors=["red","green","yellow"]

const PieChartExample=()=>(
    <div>
    <PieChart width={730} height={250}>
  <Pie data={data2} cx="50%" cy="50%" outerRadius={80} label>
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>
    </div>
)

export default PieChartExample