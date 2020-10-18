function add (a,b) {
	return (a+b);	
}

function subtract (a,b) {
	return (a-b);
	
}

function sum (array) {
	let result=0;
	if (Array.isArray(array))
	{
		for(let i=0; i<array.length; i++)
		{
			result=array[i]+result;
		}
		return result;
	}else{
		return null;
	}
	
}

function multiply (array)  {
	let result=1;
	if (Array.isArray(array))
	{
		for(let i=0; i<array.length; i++)
		{
			result=array[i]*result;
		}
		return result;
	}else{
		return null;
	}
	
}

function power(a,b) {
	return Math.pow(a,b)
}

function factorial(e) {
	let a=1;
	while(e>0)
	{
		a=e*a
		e--;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}