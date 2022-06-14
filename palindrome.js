function isAlpha(char){
    return (/[a-zA-Z]/).test(char)
}


let s =" "
res=""
for(let i of s){
    
    if(isAlpha(i)){
        res=res+i.toLowerCase()
    }
    
}
function palindrome(){
let x=0
let y=res.length-1
while(x<=y){
    if(res[x]==res[y]){
        x=x+1
        y=y-1
    }else{
        return false
    }
}
return true
}
console.log(palindrome())