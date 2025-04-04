const params = new URLSearchParams(window.location.search);
const age = Number(params.get('age'));
const feet = Number(params.get('feet'));
const inches = Number(params.get('inches'));
const weight = Number(params.get('weight'));
const activity = Number(params.get('activity'));
const goal = Number(params.get('goal'));

const heightInInches = (feet * 12) + inches;
const calories = Math.round(((10 * (weight / 2.20462)) + (6.25 * (heightInInches * 2.54)) - (5 * age) + 5) * activity + goal);
const protein = Math.round(weight * 0.825);
const fats = Math.round((calories * 0.25) / 9);
const carbs = Math.round((calories - ((protein * 4) + (fats * 9))) / 4);

document.getElementById('calories').textContent = calories;
document.getElementById('protein').textContent = protein;
document.getElementById('fats').textContent = fats;
document.getElementById('carbs').textContent = carbs;
