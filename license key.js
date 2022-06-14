s="5F3Z-2e-9-wkjui-2lk";
k=4
temp=""
res=""
function isAlpha(str){
    return (/[a-zA-Z0-9]/).test(str)
}
for(let i of s){
    if(isAlpha(i)){
        temp=temp+i
    }
}
console.log(temp);
let x = temp.length%k
if(x==0){
    x=k
}
y=false
j=0
for(let i of temp){
    console.log(i);
    if(j==x && y==false){
        res=res+"-"
        y=true
        j=0
        console.log(res);
    }else if (j==k && y==true){
        res=res+"-"
        j=0
        console.log(res);
    }
    res=res+i
    j=j+1
}
console.log(res);