function sum(...args){
    let param = args.slice(0)
    if(param.length>1){
        let sum=0
        for(let i of param){
            sum=sum+i
        }
        return sum
    }else{
        
      return function (b){
            if(b){
                console.log(args[0]);
                return sum(args[0]+b)
            }
            return args[0]
        }
    }
}



// console.log(  sum(1,2))
let y=sum(1)(2)
console.log(y());

function sum(a){
    return function(b){
        if(b){
            let y=a+b
        return function(c){
            if(c){
            let x=(a+b)*c
            return sum(x)
        }
        return y
    }
    }
    return a
    }
}

console.log(sum(5)(6)(6)(4)())