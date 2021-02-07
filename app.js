function lookForDish(){
const dishName =document.getElementById('dish-catagory').value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
.then(res=>res.json())
.then(data=>displayFood(data))

const displayFood = meals=>{
    const foodsDiv= document.getElementById('foods');
    const menu=meals.meals;
    foodsDiv.innerHTML="";
    menu.forEach(meal => {
        const foodDiv= document.createElement('div');
        foodDiv.className='food'
        const foodInfo=`
        <div onclick="displayFoodsDetails('${meal.strMeal}')">
        <img id="firstImg" src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h>
            
        </div>    

        `;
        foodDiv.innerHTML= foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}
}
const displayFoodsDetails=strMeal=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFoodsDetail(data));
}
const displayFoodsDetail = meals=>{
    const foodsDiv= document.getElementById('ingradience');
    const menu=meals.meals;
    foodsDiv.innerHTML="";
    menu.forEach(meal => {
        const foodDiv= document.createElement('div');
        foodDiv.className='food'
        const foodInfo=`
        <img src="${meal.strMealThumb}">
         <h3>${meal.strMeal}</h3>
         <li>${meal.strIngredient1}</li> 
         <li>${meal.strIngredient2}</li> 
         <li>${meal.strIngredient3}</li> 
         <li>${meal.strIngredient4}</li> 
         <li>${meal.strIngredient5}</li> 

        `;
        foodDiv.innerHTML= foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}