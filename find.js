
function countCharacter(text, char){
    let count = 0;
    for(let i in text){
        if(text[i] === char)
            count++;
    }
    return count

};


let text = 'javascript';
let char = 'a';
console.log(countCharacter(text,char)); //2
