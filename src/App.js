import React, { Fragment, useEffect, useState } from 'react';
import Recipe from './components/Recipie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const AppID = '204b75f1';
  const ApiKeys = '0e5e734eef41a940bb0a8637ef76b80d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const result = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${ApiKeys}`,
    );
    const data = await result.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <Fragment>
      <h1>Recipes</h1>
      <form className="form" onSubmit={getSearch}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={search}
            onChange={updateSearch}
            class="form-control"
          ></input>
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              submit
            </span>
          </div>
        </div>
      </form>

      <div className="content">
        {recipes.map(ele => (
          <Recipe
            key={ele.recipe.label}
            image={ele.recipe.image}
            title={ele.recipe.label}
            calories={ele.recipe.calories}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
