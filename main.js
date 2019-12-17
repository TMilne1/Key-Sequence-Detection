let code;
let arr = []
const secretCode = "Terrick"

function log(event){
    arr.push(event.key)
    if (arr.length > secretCode.length){ 
    arr = arr.splice(1, )
    }

    if (arr.length == secretCode.length){
        code = arr.join('');
    }
    
    if (code == secretCode) {
        console.log("you got it!")
        cornify_add();
    }
}

document.addEventListener('keypress', log)




