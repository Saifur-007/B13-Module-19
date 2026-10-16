// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`


const heights = [167, 190, 120, 165, 137];

function find(heights){
    let low = heights[0];
    for(let height of heights){
        if(height < low){
            low = height;
        }
    }
    return low;
}

console.log(find(heights));