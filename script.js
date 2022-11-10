let distance;
let distanceMessage;
let age;
let ageMessage;
let ageMult;
let discount;
let discountVal;
let summaryBox;

function checkDistance(val, message){
    parseInt(val);

    if(isNaN(val) || val === null || val === 0){
        console.log("Invalid distance value");
        message.classList.remove("invisible");
        return 0;
    } else{
        return val;
    }
    
}

function calculateAgeMult(val){
    if(val > 65){
        return 0.6;
    } else if(val > 0 && val < 18){
        return 0.8;
    } else{
        return 1;
    }
}

function checkAge(val, message){
    parseInt(val);

    if(isNaN(val) || val === null || val === 0){
        console.log("Invalid age value");
        message.classList.remove("invisible");
        return 0;
    } else{
        return val;
    }
}

function calculateDiscount(valDistance, valAge, textDistance, textAge){
    valDistance = checkDistance(valDistance, textDistance);
    valAge = checkAge(valAge, textAge);

    if(valDistance === 0 || valAge === 0){
        console.log("Cannot calculate discount");
        discountVal = -1;
    } else {
        ageMult = calculateAgeMult(valAge);
        console.log(valDistance + " km multiplied by 0.21");
        console.log("Age multiplier is " + ageMult);
        discountVal = 0.21 * valDistance * ageMult;
    }

    return discountVal;
}

function discountButton(){
    distance = document.getElementById('inputDistance').value;
    distanceMessage = document.getElementById('distanceMessage');
    age = document.getElementById('inputAge').value;
    ageMessage = document.getElementById('ageMessage');
    summaryBox = document.getElementById('summaryBox');

    distance = parseInt(distance);
    age = parseInt(age);

    discount = calculateDiscount(distance, age, distanceMessage, ageMessage);
    discount = discount.toFixed(2);

    if(discount !== -1){
        distanceMessage.classList.add("invisible");
        ageMessage.classList.add("invisible");
        summaryBox.innerHTML = "Your price is " + discount;
    }
}