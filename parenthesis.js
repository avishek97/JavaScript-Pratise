let s='[{}]'
openBracs=['[','{','(']
closeBracs=[']','}',')']
const res = []
function isValid(s){
    for(let i of s){
        if(openBracs.includes(i)){
            res.push(i)
        }else if(closeBracs.includes(i)){
            let x=openBracs.indexOf(res.at(-1))
            if(x!=closeBracs.indexOf(i)){
                return false
            }else{
                res.pop()
            }
        }
    }
    if(res.length){
        return false
    }
    return true
}
console.log(isValid(s));