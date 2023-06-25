// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App () {
  const [allFoods, setFoods] = useState(foods);

  const addNewFood = (newFood) => {
  // Create a new array
  const updatedFood = [...allFoods, newFood];
 
  setFoods(updatedFood);
};



  return <div className="App">
  <AddFoodForm addFood = {addNewFood}/>
  <Search allFoods={allFoods} setFoods={setFoods} />
  <h1 className='text-2xl'>Food List</h1>
  <div className='flex flex-wrap'>
    {allFoods.map((food) => {
      return (
        <FoodBox food={food} allFoods={allFoods} setFoods={setFoods}/>)
    })}
  </div>
  </div>;
}
export default App;
