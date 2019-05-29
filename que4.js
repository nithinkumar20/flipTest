que1 = (e) => {
let sum = 0;
let arr = [];
 for(let i=0 ; i< e.length; i++) {

if(e[i] === '[' ) {} else if( e[i] === ']' ) {} else if(e[i] === ',' ) {}else{	
console.log((e[i]))
let su = sum + parseInt(e[i])
if(su >= sum) {
arr.push(e[i])
console.log((e[i]))
sum = su
} else {
arr = []
}
}
}
console.log( sum)
console.log( arr)
}


const args = process.argv[2]
que1(process.argv[2]);
