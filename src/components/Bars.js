import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function Bars(){

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
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
    },
    xaxis: {
      categories: [2019, 2020, 2021, 2022]
    },
    legend: {
      show: false
    },                            
    fill: {
      colors : ['#FF0000'],
    }
  }
  var series = [
    {
      data: [data1, data2, data3, data4],
    },
  ]

  return(
    <div className="row">
        <p className='text-2xl font-thin text-center'>Sales evolution</p>
        <Chart
        options={options}
        series={series}
        type="bar"
        height="310"
        width={"420"}
        />
    </div>
  )
}