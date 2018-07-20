var input1 = window.prompt("Enter first number", "0");
var input2 = window.prompt("Enter second number", "0");
var input3 = window.prompt("Enter third number", "0");
var input4=window.prompt("Enter first name");
var input5=window.prompt("Enter second name");
var input6=window.prompt("Enter third name");
var value1 = parseFloat(input1);
var value2 = parseFloat(input2);
var value3 = parseFloat(input3);
var maxValue = maximum(value1, value2, value3);
document.writeln(
  "First number: " +
    value1 +
    "<br/>Second number: " +
    value2 +
    "<br/>Third number: " +
    value3 +
    "<br/>Maximum is: " +
    maxValue + "<br/>"
);
function maximum(x, y, z) {
  return Math.max(x, Math.max(y, z));
};

var name1=input4.length;
var name2=input5.length;
var name3=input6.length;
var maxLength=maximum(name1, name2, name3);

document.writeln("First name:" + input4 + "<br/>Second name: " + input5 + "<br/>Third name: " + input6 + "<br/>Longest name: " + maxLength);
length1 = charLength(input4);
length2 = charLength(input5);
length3 = charLength(input6);
function maxLength(x, y, z) {
  return Math.max(x, Math.max(y, z));
};