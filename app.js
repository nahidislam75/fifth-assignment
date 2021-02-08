
function lookForDish() {
    const dishName = document.getElementById('dish-catagory').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
        .then(res => res.json())
        .then(data => displayFood(data))
        .catch(error => window.alert('Can not find your food'))//for error hendling
    const displayFood = meals => {
        const foodsDiv = document.getElementById('foods');
        const menu = meals.meals;
        foodsDiv.innerHTML = "";
        menu.forEach(meal => {
            const foodDiv = document.createElement('div');
            foodDiv.className = 'food'
            const foodName = `
        <div onclick="lookForDishDetail('${meal.strMeal}')">
        <img id="firstImg" src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h>
            
        </div>    

        `;
            foodDiv.innerHTML = foodName;
            foodsDiv.appendChild(foodDiv);
        });
    }

}
//for display clicked food detail
const lookForDishDetail = strMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodsDetail(data));
}
const displayFoodsDetail = meals => {
    const ingredintssDiv = document.getElementById('ingredints');
    const menu = meals.meals;
    ingredintssDiv.innerHTML = "";
    menu.forEach(meal => {
        const ingredintsDiv = document.createElement('div');
        ingredintsDiv.className = 'food'
        const foodInfo = `
        <img class="imageForIngredint" src="${meal.strMealThumb}">
         <h3>${meal.strMeal}</h3>
         <p>Ingredints</p>
         <ul class="list-item">
         <li>${meal.strIngredient1}</li> 
         <li>${meal.strIngredient2}</li> 
         <li>${meal.strIngredient3}</li> 
         <li>${meal.strIngredient4}</li> 
         <li>${meal.strIngredient5}</li> 
         <li>${meal.strIngredient6}</li> 
         <li>${meal.strIngredient7}</li> 
         <li>${meal.strIngredient8}</li> 
         <li>${meal.strIngredient9}</li> 
         <li>${meal.strIngredient10}</li> 
        </ul>
        `;
        ingredintsDiv.innerHTML = foodInfo;
        ingredintssDiv.appendChild(ingredintsDiv);
    });
}