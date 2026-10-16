// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`


const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function find(names){
    let lowName = names[0];
    for (let name of names){
        if(name.length < lowName.length){
            lowName = name;
        }
    }
    return lowName;
}

console.log(find(names));