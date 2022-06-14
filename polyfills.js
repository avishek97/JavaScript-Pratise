let arr=[1,2,3,4,5,6]
//    Array.prototype.map=null
//    if( !Array.prototype.map){
//        let arr=[]
//        Array.prototype.map = function (callback){
//             for(let i of this){
//               arr.push(  callback(i))
//             }
//             return arr
//        }
//    }
//console.log(arr.map);
//   let abc = arr.map(items=>{
//     return items*2
//    })
//    console.log(abc);

// map polyfils

// Array.prototype.myMap = function(callback){
//     let arr=[]
//     for(let i of this){
//         arr.push(callback(i))
//     }
//     return arr
// }

// let ar1=arr.myMap(items=>{
//     return items*2
// })
// console.log(ar1);

// filter

// Array.prototype.myFilter = function(callback){
//     let arr=[]
//     for(let i of this){
//         if(callback(i))
//             arr.push(i)
//     }
//     return arr
// }

// let ar1=arr.myFilter(item=>{
//      return item%2!=0
// })
// console.log(console.log(ar1));

// Reduce

// Array.prototype.myReduce = function(callback,initalValue){
//     let xyz=initalValue
//     for(let i of this){
//        xyz= callback(i,xyz)
//     }
//     return xyz
// }

// let k=arr.myReduce((item,sum)=>{
//     sum=sum*item
//     return sum
// },1)
// console.log(k);

// bind

// function xyz(a,b,c){
//     console.log(this.name,a,b,c);
// }
// const obj = {
//     name:"Avishek"
// }

// Function.prototype.myBind = function(...args){
//     let obj=this
//     param=args.slice(1)
//     return function (...args1){
//         obj.apply(args[0],[...param,...args1])
//     }
// }
// let x=xyz.myBind(obj,"ashish","anirudh")
// x("Mishra")

//PROMISE.ALL

function myAll(arr){
    return new Promise((resolve,reject)=>{
        let resl=[]
        let count=0
        arr.forEach((item,ind)=>{
            item.then(res=>{
                resl.push(res)
                count=count+1
                if(arr.length==count){
                    resolve(resl)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}
ar=[Promise.resolve("ok"),Promise.reject("hey")]
myAll(ar).then(res=>{
    console.log(res);
}).catch(err=>{ 
    console.log(err);
})