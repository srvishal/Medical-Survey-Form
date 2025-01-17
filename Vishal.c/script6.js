function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "Please enter valid weight and height values.";
        return;
    }
    const bmi = weight / (height/100)**2;
    let category = "";

    // Determine BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result with one decimal place
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}

function clearFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
}