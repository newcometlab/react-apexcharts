import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function Line(){

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
      legend: {
        show: false
      },
      series: [{
      name: 'TEAM A',
      type: 'column',
      data: [data1, data2, data3, data4]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [data4, data2, data3, data1]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [data3, data4, data1, data2]
    }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '40%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [data1, data2, data3, data4]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003'],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: true},
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
    
        }
      }
    }
  }

  return(
    <div className="row">
        <p className='text-2xl font-thin text-center'>Cross analysis</p>
        <Chart
        options={options}
        series={options.series}
        type="line"
        width={420}
        height={350}
      />
    </div>
  )
}