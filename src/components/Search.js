import { Divider, Input } from 'antd';

// Iteration 5
function Search( {allFoods, setFoods} ) {

    const handleSearch = (e) => {
        const searchInput = e.target.value;
        const filteredFood = allFoods.filter((food) => {
            return food.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        setFoods(searchInput ? filteredFood : allFoods);
    }
  return (
    <>
      <Divider>Search</Divider>

      <div className='mx-16'>
      <Input type="text" onChange={(e) => {handleSearch(e)}} placeholder='Search food' />
      </div>
    </>
  );
}

export default Search;
