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
        <div onclick="displayFoodDetail('${meal.strMeal}')">
            <h3>${meal.strMeal}</h>
            <img id="firstImg" src="${meal.strMealThumb}">
        </div>    

        `;
        foodDiv.innerHTML= foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}

}
const displayFoodDetail=strMeal=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}
// const randerFoodInfo=meals=>{
//     const oneMeal=meals.meals;
//     const onemenu=oneMeal[0];
//     const foodDiv=document.getElementsByClassName('ingradience');
//     foodDiv.innerHTML=`
//         <img src="${onemenu.strMealThumb}">
//         <h3>${onemenu.strMeal}</h3>
//         <li>${onemenu.strIngredient1}</li>   
//     `;


// }