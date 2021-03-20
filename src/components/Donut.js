import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function Donut(){

  const [data1, setData1] = useState(10)
  const [data2, setData2] = useState(33)
  const [data3, setData3] = useState(12)
  const [data4, setData4] = useState(87)

  useEffect(() => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  const interval = setInterval(() => {
      setData1(getRandomInt(100))
      setData2(getRandomInt(100))
      setData3(getRandomInt(100))
      setData4(getRandomInt(100))
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  var options = {
    series: [data1, data2, data3, data4],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    legend: {
      show: false
    },
    stroke: {
      show: true}
  }
  
  return(
    <div>
    <p className='text-2xl font-thin text-center'>Budget distribution</p>
    <div className="row">
        <Chart
        options={options}
        series={options.series}
        type="donut"
        height="350"
        width="420"
      />
  </div>
  </div>
  )
}