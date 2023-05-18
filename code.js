//Code talks

function isNarcissistic(n){
    let cont = 0;
    const arr = String(n).split('');

    for(let i=0; i < arr.length; i++){
        const num = Number(arr[i]);
        const pow = Math.pow(num, arr.length);
        cont += pow;
    }
    return n === cont;
}



// function isNarcissistic(n){
//     return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
// }

console.log(isNarcissistic());