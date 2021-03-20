import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function Radar(){

    const [data1, setData1] = useState(10)
    const [data2, setData2] = useState(33)
    const [data3, setData3] = useState(12)
    const [data4, setData4] = useState(87)
  
    useEffect(
    () => {
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
        chart:{
            toolbar: {
                show: false
              },
        },
        legend: {
            show: false
        },
        series: [
        {
            name: "Radar Series 1",
            data: [data1, data2, data3, data4]
        },
        {
            name: "Radar Series 2",
            data: [data4, data3, data2, data1]
        }
        ],
    }

  return(
      <div className="row">
          <p className='text-2xl font-thin text-center'>Skills measurement</p>
          <Chart
          options={options}
          series={options.series}
          type="radar"
          height="310"
          width="420"
        />
    </div>

)

}