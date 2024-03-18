const currentTime = document.getElementById('current-time');
const recipesGrid = document.getElementById('recipes');

const meals = {
  breakfast: {
    time: '07:00',
    recipes: [
      { name: 'Pancakes', image: './images/elevenses.jpg', link: 'https://www.allrecipes.com/recipe/11020/welsh-cakes/' },
      { name: 'Eggs Benedict', image: 'path/to/eggs-benedict.jpg', link: 'link/to/eggs-benedict/recipe' }
    ]
  },
  second_breakfast: {
    time: '09:00',
    recipes: [
      { name: 'Pancakes', image: 'path/to/pancakes.jpg', link: 'link/to/pancakes/recipe' },
      { name: 'Eggs Benedict', image: 'path/to/eggs-benedict.jpg', link: 'link/to/eggs-benedict/recipe' }
    ]
  },
  elevenses: {
    time: '11:00',
    recipes: [
      { name: 'Pancakes', image: 'path/to/pancakes.jpg', link: 'link/to/pancakes/recipe' },
      { name: 'Eggs Benedict', image: 'path/to/eggs-benedict.jpg', link: 'link/to/eggs-benedict/recipe' }
    ]
  },
  luncheon: {
    time: '12:00',
    recipes: [
      { name: 'Chicken Salad Sandwich', image: 'path/to/chicken-salad.jpg', link: 'link/to/chicken-salad/recipe' },
      { name: 'Pasta Primavera', image: 'path/to/pasta-primavera.jpg', link: 'link/to/pasta-primavera/recipe' }
    ]
  },
  afternoon_tea: {
    time: '13:00',
    recipes: [
      { name: 'Chicken Salad Sandwich', image: 'path/to/chicken-salad.jpg', link: 'link/to/chicken-salad/recipe' },
      { name: 'Pasta Primavera', image: 'path/to/pasta-primavera.jpg', link: 'link/to/pasta-primavera/recipe' }
    ]
  },
  dinner: {
    time: '18:00',
    recipes: [
      { name: 'Salmon with Roasted Vegetables', image: 'path/to/salmon-roasted-veg.jpg', link: 'link/to/salmon/recipe' },
      { name: 'Stir-Fry', image: 'path/to/stir-fry.jpg', link: 'link/to/stir-fry/recipe' },
      { name: 'Welsh Cakes', image: 'path/to/welsh-cakes.jpg', link: 'https://www.allrecipes.com/recipe/11020/welsh-cakes/' } // Your Welsh Cakes recipe link
    ]
  },
  supper: {
    time: '21:00',
    recipes: [
      { name: 'Salmon with Roasted Vegetables', image: 'path/to/salmon-roasted-veg.jpg', link: 'link/to/salmon/recipe' },
      { name: 'Stir-Fry', image: 'path/to/stir-fry.jpg', link: 'link/to/stir-fry/recipe' },
      { name: 'Welsh Cakes', image: 'path/to/welsh-cakes.jpg', link: 'https://www.allrecipes.com/recipe/11020/welsh-cakes/' } // Your Welsh Cakes recipe link
    ]
  }
};

function updateTime() {
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  currentTime.textContent = `Current Time: ${now}`;
  displayRecipes();
}

function displayRecipes() {
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let currentMeal = null;

  for (const meal in meals) {
    if (meals[meal].time <= now) {
      currentMeal = meals[meal];
      break;
    }
  }

  if (!currentMeal) return; // No matching meal found

  recipesGrid.innerHTML = '';

  currentMeal.recipes.forEach(recipe => {
    const button = document.createElement('button'); // Changed from div to button
    button.classList.add('recipe-card');
    button.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;
    button.addEventListener('click', () => {
        window.open(recipe.link, '_blank');
    });
    recipesGrid.appendChild(button);
  });
}

updateTime();
setInterval(updateTime, 60000); // Update time every minute
