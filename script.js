// // for(let n = 0; n <=10; n= n+2){
// //  console.log(n)
// // }

// for(let n = 0; n <=10; n= n+2){
//     let rn = n % 2;
//     if(rn===0){
//         console.log(n)
//     }
//    }

   


let callisstudant= ['hi','shoh','lee','nano','iuri','naru','yaki','owo','joo','yake'];
let ini = parseInt( prompt('começa por onde?'));

if(ini > 0 && ini < callisstudant.length){
    for(let i=ini; i <=10 ; i++){
        document.getElementById(i).textContent= callisstudant[i];
       }
  
 }else{
   

   if(ini<0){5
    console.log('invalido');
}

if(ini > callisstudant.length){
    console.log(`Lista com total de ${callisstudant.length}`);
    document.getElementById(1).textContent= `Lista com total de ${callisstudant.length}`;
}
 }