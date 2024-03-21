import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
  function getRandomElements(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    console.log(shuffled);
    return shuffled.slice(0, count);
  }
  const { categories } = useLoaderData();

  const foods = getRandomElements(categories, 10);
  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold my-20">
        Your Favourite Foods
      </h2>
      {/* foods contianer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 justify-center ">
        {foods.map(food => (
          <Food key={food.id} food={food}>
            {' '}
          </Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
