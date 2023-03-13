function bmi11(bmi){

   
   if (bmi <= 18.5) {
      //console.log("underweight",bmi);
      return "underweight"
   }
   if (bmi > 18.5 && bmi < 30) {
      //console.log("overweight",bmi);
      return "overweight"
   }
   else if ( bmi > 30) {
      //console.log("BMI =", bmi);
      return "obese"

   }
}
var weight = 75;
var height = 1.8;
var bmi = weight / (height * height);
var y=bmi11(bmi)
console.log(y)
