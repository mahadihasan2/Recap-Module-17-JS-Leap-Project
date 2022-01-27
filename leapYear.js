//leap Year for conditional oparetor 

var year  = 2500;
if(year % 400 ==0){
    console.log('this year is a leap year');
}
else if(year % 4 ==0 && year%100!==0){
    console.log('this year is a leap year');
}
else{
    console.log('this year is not a leap year');
}

// one Line code for Leap year check
var year = 1996;
if ((year%4==0 && year%100!==0)|| year%400==0){
    console.log('Leap Year');
}else{
    console.log('Not Leap Year');
}