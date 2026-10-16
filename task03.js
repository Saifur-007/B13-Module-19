// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.


let electronics = {
    laptop: 35000,
    tablet: 15000,
    mobile: 20000
};

function totalBudget(lapQ, tabQ, mobQ){
    const totalLap = lapQ * electronics.laptop;
    const totalTab = tabQ * electronics.tablet;
    const totalMob = mobQ * electronics.mobile;

    const totalPrice = totalLap + totalTab + totalMob;
    return totalPrice;
}

const price = totalBudget(2, 3, 6);


console.log(`The total money required is = ${price} Taka.`);