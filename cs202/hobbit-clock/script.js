let testMealIndex = 0; // Maintain index for test mode

const meals = [
    { name: 'Breakfast', hour: 7, imageUrl: './images/breakfast.png' },
    { name: 'Second Breakfast', hour: 9, imageUrl: './images/second-breakfast.jpg' },
    { name: 'Elevenses', hour: 11, imageUrl: './images/elevenses.jpg' },
    { name: 'Luncheon', hour: 13, imageUrl: './images/luncheon.jpg' },
    { name: 'Afternoon Tea', hour: 15, imageUrl: './images/afternoon-tea.jpg' },
    { name: 'Dinner', hour: 18, imageUrl: './images/dinner.jpg' },
    { name: 'Supper', hour: 21, imageUrl: './images/supper.jpg' },
    { name: 'Bedtime', hour: 22, imageUrl: './images/bedtime.jpg' } // Image for late night
];

function updateClockAndMeal(forceUpdate = false) {
    const now = new Date();
    const hours = forceUpdate ? meals[testMealIndex].hour : now.getHours();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = `${timeString}`;

    let currentMealIndex;
    if (forceUpdate) {
        currentMealIndex = testMealIndex;
    } else {
        currentMealIndex = meals.findIndex(meal => hours < meal.hour) - 1;
        if (currentMealIndex < 0) currentMealIndex = meals.length - 1;
    }

    const currentMeal = meals[currentMealIndex];
    const currentMealString = `${currentMeal.name} at ${currentMeal.hour % 12 || 12} ${currentMeal.hour >= 12 ? 'p.m.' : 'a.m.'}`;
    document.getElementById('currentMeal').textContent = `Current Hobbit Meal: ${currentMealString}`;

    const nextMeal = meals[(currentMealIndex + 1) % meals.length];
    const nextMealString = `${nextMeal.name} at ${nextMeal.hour % 12 || 12} ${nextMeal.hour >= 12 ? 'p.m.' : 'a.m.'}`;
    document.getElementById('nextMeal').textContent = `Next Hobbit Meal: ${nextMealString}`;

    // Update the background image instead of color
    document.getElementById('background').style.backgroundImage = `url('${currentMeal.imageUrl}')`;
    // document.body.style.backgroundImage = `url('${currentMeal.imageUrl}')`;
    document.body.style.backgroundSize = 'cover';

    if (forceUpdate) {
        testMealIndex = (testMealIndex + 1) % meals.length;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    updateClockAndMeal();
    const recipeUrls = [
        'https://www.allrecipes.com/recipe/11020/welsh-cakes/',
        // Add more recipe URLs here
    ];

    recipeUrls.forEach(url => {
        // Fetch recipe data (image URL, description) from the backend or a CORS proxy
        // This is pseudo-code. You'll need a backend service or an API to get these details.
        fetch(`YOUR_BACKEND_SERVICE_OR_CORS_PROXY?recipeUrl=${encodeURIComponent(url)}`)
            .then(response => response.json())
            .then(data => {
                createRecipeCard(data.imageUrl, data.description);
            })
            .catch(error => console.error('Error fetching recipe data:', error));
    });
});
// Initialize the page with the correct meal and background

// Regularly update the clock and meal information
// setInterval(() => updateClockAndMeal(), 1000);

// Listen for 'q' key press to force update to the next meal for testing
document.addEventListener('keydown', (event) => {
    if (event.key === 'q') {
        updateClockAndMeal(true);
    }
});
