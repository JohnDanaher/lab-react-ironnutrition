// src/App.js
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [food, setFood] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const searchFood = (str) => {
    let filteredFood;
    if (str === "") {
      filteredFood = foods;
    } else {

      filteredFood = [...food].filter((grub) => {
        return grub.name.slice(0, str.length).toLowerCase() === str.toLowerCase();
      });
    }
 
    setFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const remainingFoods = food.filter(grub => grub.name !== foodName)
    setFood(remainingFoods);
  }

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div>
    <button onClick={toggleForm}>{showForm ? 'Hide Form' : 'Add New Food'}</button>
    {showForm && <AddFoodForm food={food} setFood={setFood}/>}

      <SearchBar searchFood={searchFood}/>

      {food.map((grub) => {
        return (
          <div key={grub.name}>
            <FoodBox
              food={{
                name: grub.name,
                calories: grub.calories,
                image: grub.image,
                servings: grub.servings,
              }}
              deleteFood={deleteFood}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
