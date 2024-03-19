import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [recipe, setRecipe] = useState([]);

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("../public/recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  const handleAdd = (p) => {
    const isInclude = cart.find((item) => item.recipe_id == p.recipe_id);
    if (!isInclude) {
      setCount(count + 1);
      setCart([...cart, p]);
      console.log(cart);
    } else {
      toast("Already Selected");
    }
    // console.log(isInclude);
  };
  console.log(cart);

  return (
    <>
      <Toaster />
      <Header></Header>
      <div className="mt-10">
        <h2 className="text-4xl font-bold m-4">Our Recipes</h2>
        <p className="w-2/3 mx-auto">
          Balancing flavors, whether it's the sweetness of caramelized onions is
          key to creating a harmonious taste profile.Finally, garnishing with
          fresh herbs finishing touch that enhances and the overall dining
          experience.
        </p>
      </div>

      <div className="lg:flex ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {recipe.map((item) => (
            <Card
              handleAdd={handleAdd}
              key={item.recipe_id}
              sItem={item}
            ></Card>
          ))}
        </div>

        <div className=" w-full  mt-6 shadow-xl shadow-gray-400">
          <h3 className="text-3xl font-bold my-4">Want to cook: {count}</h3>
          <div className="flex justify-around mr-14">
            <p>Name </p>
            <p>Time </p>
            <p>Calories </p>
          </div>
          <div>
            {cart.map((apItem) => (
              <div className="flex justify-around">
                <p>{apItem.recipe_name}</p>
                <p>{apItem.preparing_time}</p>
                <p>{apItem.calories}</p>

                <button className="btn btn-accent rounded-full">
                  Preparing
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
