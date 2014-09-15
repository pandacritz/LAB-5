var
num1,
num2,
operation,
end,
done;
done = false;

// prompts and inputs 

num1 = parseFloat(prompt("Input the first number you would like to (+)(-)(*)(/) \n"));
num2 = parseFloat(prompt("Input the second number you would like to (+)(-)(*)(/) \n"));
do{
operation = prompt("would you like to add, subtract, divide, or multiply please use the correct symbol\n(+)(-)(*)(/)");

if(operation == "+")
{
done = true;
end = add(num1, num2);
}
else 
if(operation == "-")
{
done = true;
end = subtract(num1, num2);
}
else 
if(operation == "*")
{
done = true;
end = multiply(num1, num2);
}
else 
if(operation == "/")
{
done = true;
end = divide(num1, num2);
}
else
{
alert("dude common pick a symbol\n(+)(-)(*)(/)");
}
}while(!done);
console.log(num1 + " " + operation + " " + num2 + " = " + end);

//functions

function add(arg1, arg2){
return arg1 + arg2;
}

function subtract(arg1, arg2){
return arg1 - arg2;
};

function multiply(arg1, arg2){
return arg1 * arg2;
};

function divide(arg1, arg2){
if(arg1 == 0 || arg2 == 0)
{
return "brah common you cant divide by zero.";
}
return arg1 / arg2;
};

