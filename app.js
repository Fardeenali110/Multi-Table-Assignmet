document.write("We are Gonna to Print Multiple Tables <br>");
let = Answer = parseInt (prompt("Which tables you want to print?"));
for(let num = 1; num <=  Answer;  num++){
    document.write("<br> Tables Of : " + num + "<br>");
    for( let i = 1;  i<=10; i++)
    {
document.write(i+"X"+num+"="+num*i+ "<br>");
    } 
}




