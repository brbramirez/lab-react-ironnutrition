import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

const AddFoodForm = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
    const [showForm, setShowForm] = useState(true);

    const handleNameInput = e => setName(e.target.value);
 
    const handleImageInput = e => setImage(e.target.value);
   
    const handleCaloriesInput = e => setCalories(e.target.value);
   
    const handleServingsInput = e => setServings(e.target.checked);

    const handleClick = e => setShowForm(!showForm);

    const handleSubmit = (e) => {        
        e.preventDefault();
        const newFood = { name, image, calories, servings };
     
        console.log("Submitted: ", newFood);
        props.addFood(newFood);          // <== ADD
 
        // Reset the state
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
      }

  return (
    <div className="mx-16">

    {
        showForm ? 
        <button onClick={(e) => {handleClick(e)}}>Hide Form</button>
        : 
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={(e) => {handleNameInput(e)}} />

            <label>Image</label>
            <Input value={image} type="text" onChange={(e) => {handleImageInput(e)}} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={(e) => {handleCaloriesInput(e)}} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={(e) => {handleServingsInput(e)}} />

            <button className="p-1 m-3 rounded-full bg-teal-400" type="submit">Create</button>
            <br></br>
            <button className="p-1 rounded-full bg-red-500" onClick={(e) => {handleClick(e)}}>Hide Form</button>
        </form>
    }
        
    </div>
  )
}

export default AddFoodForm