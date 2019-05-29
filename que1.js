que1 = (e) => {
let sum = 0;
 for(let i=0 ; i< e.length; i++) {
if(e[i] === '[' ) {} else if( e[i] === ']' ) {} else if(e[i] === ',' ) {}else{	
sum = sum + parseInt(e[i])
}
}
console.log( sum)
}


const args = process.argv[2]
que1(process.argv[2]);





