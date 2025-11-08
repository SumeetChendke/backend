var arr=[1,2,3,4,5];

// arr.forEach(function(value) {
//     console.log(value+" hello");
          
// });.

// var newarr=arr.map(function(value){
//     return value*3;
// });

// console.log(newarr);   //(5) [3, 6, 9, 12, 15]


// var ans=arr.filter(function(value){
//     if (value>=3) {return true;}
//     else { return false;}
// });

// console.log(ans);   //(3) [3, 4, 5]


// var ans=arr.find(function(val){
//     if (val===2) {return val;}
// })

// console.log(ans);     // 2


// console.log(arr.indexOf(2));  //1


var obj={
    name:"harsh",
    age:12
}

// Object.freeze(obj)    //cant cange objects value after freeze

  
function abcd(){     //abcd.length = no of parameters
    return 12;
}

// console.log(abcd());  // returning value 

async function func() {
var blob=await fetch('https://randomuser.me/api/');
var rsp=await blob.json();
console.log(rsp);
}

func()