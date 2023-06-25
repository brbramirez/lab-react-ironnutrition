import { Card, Row, Col, Divider, Input, Button } from "antd";

const FoodBox = ( {food, allFoods, setFoods} ) => {

    const deleteFood = foodName => {
        const filteredFood = allFoods.filter(food => {
          return food.name !== foodName;
        });
     
        setFoods(filteredFood);
      };

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10, padding:10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings * food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} </b> kcal
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>

  )
}

export default FoodBox