import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import './App.css'

const App = () => {
  const [data, setData] = useState({ categories: [] });

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((val) => setData(val))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryList data={data} />} />
        <Route path="/meals/:categoryName" element={<MealList />} />
        <Route path="/recipe/:mealId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

const CategoryList = ({ data }) => {
  return (
    <div>
      <h1>Recipe App</h1>
      <div className="container">
        <div className="row">
          {data.categories.map((category) => (
            <div key={category.idCategory} className="col-md-4">
              <div className="card">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.strCategory}</h5>
                  <p className="card-text">{category.strCategoryDescription}</p>
                  <Link to={`/meals/${category.strCategory}`}>
                    <button>Check Meals</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MealList = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((val) => setMeals(val.meals || []))
      .catch((err) => console.error("Fetch error:", err));
  }, [categoryName]);

  const handleMealClick = (mealId) => {
    navigate(`/recipe/${mealId}`);
  };

  return (
    <div>
      <h1>{categoryName} Meals</h1>
      <div className="container">
        <div className="row">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="col-md-4">
              <div className="card" onClick={() => handleMealClick(meal.idMeal)}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecipeDetails = () => {
  const { mealId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecipe(data.meals[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [mealId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <div className="container">
        <div className="card">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.strMeal}</h5>
            <p className="card-text">{recipe.strInstructions}</p>
            <h6>Ingredients:</h6>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                return ingredient ? (
                  <li key={i}>{`${measure} ${ingredient}`}</li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
