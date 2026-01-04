function add(a,b){
    return a+b;
}

function temperature(today){
    return today >= 30 ? "hot" :"cold";
}

/* 4-	Change the previous function to take 2 parameters: Temperature and Actual feel temperature to have 3 cases:
a.	Prints normal if both of temperature and actualFeel between 25 and 30.
b.	Prints Cold if both of temperature and actualFeel less than 25.
c.	Prints Hot if both of temperature and actualFeel higher than 30.
d.	Prints “Ambiguous, can’t detect”, in any different case.
Can you use ternary conditional operator in previous example? Why?
Can you use switch case in previous example? Why?
*/
function teperature(temperature, actualFeel){
    if(temperature >= 25 && temperature <= 30 && actualFeel >= 25 && actualFeel <= 30){
        return "normal";
    }else if(temperature < 25 && actualFeel < 25){
        return "cold";
    }else if(temperature > 30 && actualFeel > 30){
        return "hot";
    }else{
        return "Ambiguous can't detect";
    }
}
 // yes we can use ternary conditional operator because it is a short way to write if else statements
 // yes we can use switch case because i have cases to check for each condition so it is a good way to write the code


/*5-Make a function that takes Student faculty as a parameter, checks:
a.	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
b.	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
c.	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
d.	For any other faculty, show message: “You’re eligible to SW fundamentals track”.
(Use switch(). And why it’s better in that case?).
  */

function studentuniversity(Faculty){
    switch(Faculty){
    case "FCI":
        return "you are eligible to programing track";
    break;
    case "Engineering":
        return "you are eligible to Network and Embedded tracks";
    break;
    case "Commerce":
        return "you are eligible to ERP and Social media tracks";
    break;
    default:
        return "you are eligible to SW fundamentals track";
    break;
    }
}
// because it is a good way to write the code and it is easy to read and understand

 
/*6-	Make a function that takes 2 numbers as parameters, and print all odd numbers between them. */
function oddnumber(start,end){
    for(let i=start;i<end;i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
}


/*7-	Make a function that takes math expression as a parameter, and print the result. */

function math_expression(expression){
    return eval(expression);
}





/* 1-Try this code using strict mode and without strict mode, what’s the difference? And why?
function foo() {
    var x;
    x = 5;
    y = 6;    return x + y;
}
Console.log(foo());

2-	Will this code work with strict mode? Explain why?
var y;	
y=10; 
x = 5; 
console.log(x); 
console.log(y); 
var x;

3-	What’s the value of y variable in the following code? And why?
var x = 5; 
console.log(x); 
console.log(y); 
var y = 7; 

4-	What are the expected errors (2 errors or undefined output) from the following code? And why? What’s the difference between var & let?
function test(){
	for (let i = 0; i < 10; i++) {
  		alert(i);
		alert (x);
		let x=10;
	}
console.log(i);
}
*/

//1  in strict mode it will throw an error because y is not defined and in non strict mode it will work and return 11

// 2 Without strict mode it will work and outputs 5, 10 (x becomes global).
// With strict mode: referenceError because x is assigned before declaration

//3  Without strict mode it will work and outputs x=5, y=undefined (var y is hoisted).
// In strict mode: x=5, y=undefined

//4  in both modes it will throw an error because x is not defined and i is not defined and alert(x) before let x causes TDZ error
// the difference between var and let is that var is hoisted and let is not hoisted



