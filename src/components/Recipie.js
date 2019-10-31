import React from 'react';

function Recipe({ image, title, calories }) {
  return (
    <div class="card item recipe-card">
      <img class=" image card-img-top" src={image} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{calories}</p>
      </div>
    </div>
  );
}

export default Recipe;
