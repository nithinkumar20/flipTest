que3 = (e, f) => {
let sum = [];
let arr1 = [];
let arr2 = [];

for(let i=0 ; i< e.length; i++) {
if(e[i] === '[' ) {} else if( e[i] === ']' ) {} else if(e[i] === ',' ) {}else{	
arr1.push(e[i])
}
}

for(let j=0 ; j< f.length; j++) {
if(f[j] === '[' ) {} else if( f[j] === ']' ) {} else if(f[j] === ',' ) {}else{
arr2.push(f[j]) }}

  for(let i=0 ; i< e.length; i++) {
     for(let j=0 ; j< f.length; j++) {
        if(e[i] === '[' ) {} else if( e[i] === ']' ) {} else if(e[i] === ',' ) {}else{	
		if(f[j] === '[' ) {} else if( f[j] === ']' ) {} else if(f[j] === ',' ) {}else{
                     if(f[j] === e[i]) { 
			sum.push(f[i])
			}
		} 
	} 
    } 
  }
if(arr1.length === sum.length) {
console.log( "Two arrays are unique")
} else  {
console.log( "Two arrays passed are didderent")
}
}


const args = process.argv[2]
que3(process.argv[2], process.argv[3]);
