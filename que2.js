que2= (u) => {
let url = ''
 for(let i=0 ; i< u.length; i++) {
if(u[i] === '#'){
break ;
} else {
url = url + u[i]
}
}
console.log(url)
}

que2(process.argv[2])
