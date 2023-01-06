import logo from './logo.svg';
import './App.css';
import MainMenu from './component/mainMenu';
import { useState } from 'react';

function App() {
  const[orderList,setOrderList]=useState([
    {title: 'همبرگر مخصوص',price:'10000',img:'./images/hamburger (1).png',count:0},
    {title: 'همبرگر معمولی',price:'8000',img:'./images/hamburger (1).png',count:0},
    {title: 'همبرگر معمولی با قارچ',price:'8000',img:'./images/hamburger (1).png',count:0},
    {title: 'همبرگر مخصوص با قارچ',price:'8000',img:'./images/hamburger (1).png',count:0},
    {title: 'سیب زمینی ویژه',price:'25000',img:'./images/french_fries.png',count:0},
    {title: 'سیب زمینی ساده',price:'10000',img:'./images/french_fries.png',count:0},
    {title: 'نوشابه رژیمی',price:'2500',img:'./images/soda.png',count:0},
    {title: 'نوشابه تگری',price:'25000',img:'./images/soda.png',count:0},
    {title: 'سالاد شیرازی',price:'7000',img:'./images/salad.png',count:0},
    {title: 'سالاد سزار',price:'25000',img:'./images/ceasar.png',count:0}
])
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen bg-red-600">
      <MainMenu orderList={orderList} setOrderList={setOrderList} />
    </div>
    </>
  );
}

export default App;
