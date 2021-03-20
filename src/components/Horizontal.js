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
      fill: {
        colors : ['#3EFF00'],
      },
      series: [{
      data: [data1, data2, data3, data4],
    }],
      chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Japan'
      ],
    }
  }

  var series = [
    {
      data: [data1, data2, data3, data4]
    }
  ]

  return(
    <div className="row">
        <p className='text-2xl font-thin text-center'>International sales</p>
        <Chart
        options={options}
        series={series}
        type="bar"
        height="350"
        width={"420"}
        />
    </div>
  )
}