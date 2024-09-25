const sumOddNumbers = (num)=>{
    let sum = 0;
    num.forEach(item => {
        if(item %2 !== 0){
            sum += item;
        }
    });
    return sum
}

let number = [1,2,3,4,5,6,7,8,9]
console.log(sumOddNumbers(number)) 