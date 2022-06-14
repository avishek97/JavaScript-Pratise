// let ob = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: {
//             react:"ok"
//         }
//     }
// };

// function obj(ob){

//     let res={}

//     for(let i in ob){
//        if(typeof(ob[i])=="object"){
//            let temp = obj(ob[i])
//            for(let j in temp){
//                res[i + '.' +j] = temp[j]
//            }
//        }else{
//            res[i]=ob[i]
//        }
//     }
//     return res
// }

// console.log(obj(ob));


// const arr=[["hello",["ok",["bye",["bye bye"]]]]]

// function xyz (arr){
//     arr.map(item=>{
//         if(Array.isArray(item)){
//             xyz(item)
//         }else{
//             console.log(item);
//         }
//     })
// }
// xyz(arr)
