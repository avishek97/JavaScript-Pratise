function isAlpha(i){
    return (/[A-Z]/).test(i)
}

if(isAlpha("Z")){
    console.log("true");
}

console.log(String.fromCharCode(97));
console.log("a".charCodeAt(0));