
document.getElementById('macroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('heightFeet').value);
    const heightInches = parseInt(document.getElementById('heightInches').value);
    const weight = parseInt(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;
    const activity = parseFloat(document.getElementById('activity').value);

    const totalHeightInInches = (heightFeet * 12) + heightInches;
    const heightCm = totalHeightInInches * 2.54;
    const weightKg = weight * 0.453592;

    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    bmr += goal === 'gain' ? 500 : goal === 'lose' ? -500 : 0;

    const calories = Math.round(bmr * activity);
    const protein = Math.round(weightKg * 2.2);
    const fats = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - (protein * 4 + fats * 9)) / 4);

    localStorage.setItem('calories', calories);
    localStorage.setItem('protein', protein);
    localStorage.setItem('fats', fats);
    localStorage.setItem('carbs', carbs);

    window.location.href = 'results.html';
});
