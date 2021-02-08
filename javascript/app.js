const searchMeals = () =>{
  const searchText = document.getElementById('search-field').value;
  // console.log("clicked");
  // console.log(searchText);
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data =>displayMeals(data.categories))

}

//display Meals

const displayMeals = meals =>{
  const mealContainer = document.getElementById('meal-container');
  meals.forEach(meals => {
     const mealDiv = document.createElement('div');
     mealDiv.className = 'meals flex'
     mealDiv.innerHTML =` 
     <div class="single-meal">
      <img src = ${meals.strCategoryThumb} onclick ='displayIngredient()'>
 <h3>${meals.strCategory}</h3>
 </div>`
      mealContainer.appendChild(mealDiv);
  });
}
     



// After Clicking On Images

const displayIngredient = ingredient =>{
  const displayIngredient  = document.getElementById('displayIngredient');
  ingredient.forEach(ingredient =>{
      const ingredientDiv = document.createElement('div');
      ingredientDiv.className = 'displayIngredient'
      ingredientDiv.innerHTML= `
          <img src =${ingredient.strCategoryThumb}>
          <h3>${ingredient.strCategory}</h3>
          
          `
          displayIngredient.appendChild(ingredientDiv);

  })
}