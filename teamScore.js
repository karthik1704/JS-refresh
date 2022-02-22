// const dolphinsAvarageScore =( 96 + 108 + 89) / 3 ;
// const koalasAvarageScore = (88 + 91 + 110) / 3; 

// const dolphinsAvarageScore = (97 + 112 + 101) / 3 ;
// const koalasAvarageScore = (109 + 95 + 123 )/ 3; 

const dolphinsAvarageScore =( 97 + 112 + 101 )/ 3 ;
const koalasAvarageScore = (109 + 95 + 106) / 3; 

console.log(dolphinsAvarageScore);
console.log(koalasAvarageScore);

if (dolphinsAvarageScore > koalasAvarageScore && dolphinsAvarageScore >=100){
    console.log('dolphins wins');
} else if (dolphinsAvarageScore < koalasAvarageScore && koalasAvarageScore >=100){
    console.log('koalas wins');
} else if (dolphinsAvarageScore === koalasAvarageScore && koalasAvarageScore >=100 && dolphinsAvarageScore >=100){
    console.log('draw');
} else {
    console.log('no trophy');
}

const calcAverage =(score1, score2, score3) => (score1+score2+score3)/3;



function checkWinner(avgDolphins,avgKoalas){

    if (avgDolphins >= avgKoalas*2 ){
        console.log('dolphins wins');
    } else if (avgDolphins*2 <= avgKoalas ){
        console.log('koalas wins');
    } else {
        console.log('no trophy');
    }
    
}

// const avgDolphins = calcAverage(44,23, 71);
// const avgKoalas = calcAverage(65,54, 49);



const avgDolphins = calcAverage(85,54, 41);
const avgKoalas = calcAverage(23,34, 27);

console.log(avgDolphins, avgDolphins*2);
console.log(avgKoalas, avgKoalas*2);

checkWinner(avgDolphins, avgKoalas)