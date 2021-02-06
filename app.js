function lookForDish(){
const dishName =document.getElementById('dish-catagory').value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
.then(res=>res.json())
.then(data=>displayFood(data))

const displayFood = meals=>{
    const foodsDiv= document.getElementById('foods');
    const menu=meals.meals;
    menu.forEach(meal => {
        const foodDiv= document.createElement('div');
        foodDiv.className='food'
        const foodInfo=`
            <h3>${meal.strMeal}</h>
            <img src="${meal.strMealThumb}"
        `;
        foodDiv.innerHTML= foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
    // for(let i=0;i<menu.length;i++)
    // {
    //     const meal =menu[i];
    //     const foodDiv= document.createElement('div');
    //     // const h3 =document.createElement('h3');
    //     // h3.innerText=meal.strMeal;
    //     // foodDiv.appendChild(h3);
    //     // const img =document.createElement('img');
    //     // img.innerText=meal.strMealThumb;
    //     // foodDiv.appendChild(img);
    //     foodDiv.className='food'
    //     const foodInfo=`
    //         <h3>${meal.strMeal}</h>
    //         <img src="${meal.strMealThumb}"
    //     `;
    //     foodDiv.innerHTML= foodInfo;
    //     foodsDiv.appendChild(foodDiv);
    // }
}
//     const foodsDiv =document.getElementById('foods');
//     countries.forEach(meal => {
//         const foodDiv=document.createElement('div');

//         foodDiv.className='country';
//         const foodInfo =`
//             <h3 class="food-name">${food.name}</h3> `
//         foodDiv.innerHTML =foodInfo;      
//         foodsDiv.appendChild(foodDiv);
//     });
// }
}