function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; 
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      document.getElementById("result").innerHTML = "Please enter valid weight and height.";
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);
  
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else {
      category = "overweight";
    }

    let advice = "";
  if (category === "Underweight") {
    advice = "You are underweight. It's important to maintain a healthy weight. Consider consulting a doctor or a dietitian to create a balanced meal plan.";
    buttonHtml = `<button onclick="window.location.href='underweight.html'">Get More Advices Here</button>`;
  } else if (category === "Normal weight") {
    advice = "Congratulations! You are within the normal weight range. To maintain your weight, continue with a balanced diet and regular exercise.";
    buttonHtml = `<button onclick="window.location.href='normaleweight.html'">Get More Advices Here</button>`;
  }  else if (category === "overweight") {
    advice = "You are overweight. It's essential to focus on a balanced diet and increase physical activity to reach a healthy weight. Consult a healthcare professional for personalized advice.";
    buttonHtml = `<button onclick="window.location.href='overweight.html'">Get More Advices Here</button>`;
  }
  
    document.getElementById("result").innerHTML = `Your BMI: ${bmiRounded} (${category})<br>${advice}<br>${buttonHtml}`;
  }