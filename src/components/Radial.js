import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

export default function Radial(){

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
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: false,
            label: 'Total',
            formatter: function (w) {
              return 'Details'
            }
          }
        }
      }
    }
  }

  var labels: ['Apples', 'Oranges', 'Bananas', 'Berries']

  var series = [data1, data2, data3, data4]

  return(
    <div className="row">
      <p className='text-2xl font-thin text-center'>Activity tracking</p>
      <Chart
      options={options}
      series={series}
      label={labels}
      type="radialBar"
      height="390"
      width={"420"}
      />
    </div>
  )
}