const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

//***** YOUR CODE BELOW ↓ ******///



const fromEuroToDollar = (dollarValue) => {
    const oneEuroIs = {
     JPY: 127.9,
     USD: 1.2,
     GBP: 0.8,
 } 
     let dollarToEuro = dollarValue * oneEuroIs.USD;  
   
    return dollarToEuro;
       
 }
 console.log(fromEuroToDollar(1))
 
 
 
 const fromYenToPound = (yenValue) => {
    const oneEuroIs = {
     JPY: 127.9,
     USD: 1.2,
     GBP: 0.8,
 } 
     let poundToYen = (yenValue * oneEuroIs.JPY) * oneEuroIs.GBP;
   
   
    return poundToYen;
       
 }
 
 console.log(fromYenToPound(1))
 
 const fromDollarToYen = (dollarValue) => {
    const oneEuroIs = {
     JPY: 127.9,
     USD: 1.2,
     GBP: 0.8,
 } 
     let dollarToYen = (dollarValue * oneEuroIs.USD) * oneEuroIs.JPY;
   
   
    return dollarToYen;
       
 }
 
 console.log(fromDollarToYen(1))
 
 

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };
