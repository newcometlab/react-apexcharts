import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import CountUp from 'react-countup';

import Bars from './components/Bars';
import Donut from './components/Donut';
import Horizontal from './components/Horizontal';
import Line from './components/Line';
import Radar from './components/Radar';
import Radial from './components/Radial';

function App() {

  const [data1, setData1] = useState(23)
  const [data2, setData2] = useState(49)
  const [data3, setData3] = useState(1)
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

  return (
    <div>
 
      <header className={'flex w-full flex-col items-center justify-center p-6 lg:flex-row lg:justify-between'}>
        <div>
        <h1 className='text-4xl lg:text-5xl font-semibold'>ApexCharts / React</h1>
        <p className='text-xl m-2 lg:text-3xl text-center font-thin'>Generating random data [{<CountUp duration={1} end={data1} />} / {<CountUp end={data2} />} / {<CountUp end={data3} />} / {<CountUp end={data4} />}]</p>
        </div>
        <div className='flex'>
          <a href="https://github.com/newcometlab"><img src='../logo-github.jpg' className='mr-1 h-12 w-12 icon' alt='github newcometlab' /></a>
        </div>
      </header>

      <div class="flex flex-wrap justify-center items-center pl-14 pr-14 mt-8 xs:mt-2">
        <div className='m-2'><Horizontal/></div>
        <div className='m-2'><Line/></div>
        <div className='m-2'><Radial/></div>
      </div>

      <div class="flex flex-wrap justify-center items-center pl-14 pr-14 mt-14">
        <div className='m-2'><Radar/></div>
        <div className='m-2'><Bars/></div>
        <div className='m-2'><Donut/></div>
      </div>
    <footer className='m-6 text-xl font-thin text-center'>
      <a href='https://github.com/newcometlab/'>by newcometlab</a>
    </footer>
    </div>
  );
}

export default App;
