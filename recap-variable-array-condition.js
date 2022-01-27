var botolerColor = "red";
var waterQuantity = 3;
var piyajerDam = 40;
var name = "kobir";



// array 
var prices = [50,60,70,43,75];
var price = prices.indexOf(70);
console.log(price);
var studentNames = ['abir','kobir','tina','mina'];
var studentName = studentNames.indexOf('abir');
console.log(studentName);

// condition 

var father = true;
var salary = 50000;
var mother = false;
if ((father==false && salary>40000) || mother==false){
    console.log("ami biya korte parbo");
}
else{
    console.log('biya korte parbo na');
}

// multipul condition 

var result = 4.50;
var friendResult = 5.00;
var naimaResult = 4.50;
var riyaResult = 3.50;
if((result>=5.00 && friendResult<=4.50)|| naimaResult==4.00){
    console.log('tumi amar best friend');
}
// else if(riyaResult<=friendResult||friendResult>=naimaResult){
//     console.log('naimar result khub valo');
// }
else if((friendResult<=riyaResult||naimaResult==riyaResult)&& result>=5.00){
    console.log('tumra riyer theke misti paba');
}
else{
    console.log('basai bose muri khaba');
}

