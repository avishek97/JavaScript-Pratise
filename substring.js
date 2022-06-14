let x= 'aabaabaab'
let y= 'aba'

function isValid(x,y){
    let x1=0
    let y1=0
    while(x1<=x.length-1 && y1<=y.length-1){
        if(x[x1]==y[y1]){
            y1=y1+1
            x1=x1+1
        }else{
            y1=0
            if(x[x1]==y[y1]){
                y1=y1+1
                x1=x1+1 
            }else  if(x[x1]!=y[y1]){
                
                x1=x1+1 
            }
        }
        
    }
    if(y1==y.length){
        return true
    }
    return false
}
console.log(isValid(x,y));