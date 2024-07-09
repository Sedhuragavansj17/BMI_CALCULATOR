function Calculate(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
   

    if (weight > 0 && height > 0) {
        let heightInMeters = height / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        let result = document.getElementById('result');
        
        result.innerHTML = `${bmi.toFixed(2)}`;
        
        if (bmi < 18.5) {
            result.innerHTML += '<br>You are underweight.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML += '<br>You have a normal weight.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML += '<br>You are overweight.';
        } else {
            result.innerHTML += '<br>You are obese.';
        }
    }

}