class Calculator
{
	//Evaluate an expression that's in postfix notation.
	evaluate(postExpr)
	{
		//Store each operand and operator seperately by splitting the expression up by spacings.
		let exprArr = postExpr.split(" ");
		//Used to enforce order of operations
		let stack = [];
		//Tracks exprArr index
		let i = 0;
		
		/*
		The for loop visits every operand and operator in the expression.
		
		All operands are pushed into the stack.
		
		When an operator is found, it will pop operands from the stack and perform the appropriate calculation.
		This calculation is one of two cases:
		
				CASE 1. A normal arithmetic operation of the first and second operand, both operands being the top two elements in the stack.
						EX: (2 + 3). 
						
						y = 3, and x = 3.
							
						In this case, two elements are popped from the stack. 
						The first popped element is the second operand and the second popped element is the first operand.
						The visited operator will determine the appropriate calculation to perform between these operands.
								
				CASE 2. The MULTIPLICATION of a -1 in front of an expression enclosed in parenthesis. The stack will only have 
						EX: -(2 + 3) => -(5). 
						
						y = 5, and x = -1.
						
						The visited operator will be '-' which is actually representing the negative in front of an enclosed expression, not a substraction.
						
						Following the example, (2 + 3) was calculated in the PREVIOUS iteration of the for loop, and the result (5) was pushed into the stack.
						In the CURRENT iteration, the top element of the stack is the result (5) which gets popped and stored in variable y.
						The stack will be empty at this point, indicating that this is CASE 2. Variable x will be assigned -1 to represent the negative 
						in front of the enclosed expression. x and y will be multiplied.
						
				In both cases, the calculated result will be pushed into the stack.
			
		Once the entire array has been visited, the last element in the stack is the final result.
		*/
		for (i = 0; i < exprArr.length; i++)
		{	
			//Store the operand OR operator visited in this iteration.
			let substring = exprArr[i];

			//Push all operands into the stack.
			if(substring !== '+' && substring !== '-' && substring !== '*' && substring !== '/')
			{
				stack.push(substring);
			}
			else //Perform the appropriate calculation with the  given operator
			{	
				//Stores the second operand OR the result of a calculated expression enclosed in parenthesis
				let y;
				//Stores the first operand OR a -1 that was in front of an expression enclosed in parenthesis.
				let x;
				//Stores the result after the calculation is performed.
				let result;

				y = parseInt(stack.pop());
				
				if (stack.length === 0) //CASE 2
				{
					x = -1;
					//Operator is '-' and it actually represents a negative 1. Change the operator to multiplication.
					substring = '*'; 
				}
				else //CASE 1
				{
					x = parseInt(stack.pop());
				}
					
				if (substring === '+')
				{
					result = x + y;
				}
				else if (substring === '-')
				{
					result = x - y;
				}
				else if (substring === '*')
				{
					result = x * y;
				}
				else
				{
					result = x / y;
				}	

				//Convert the result into a string and push it into the stack.
				let stringResult = result.toString();
				stack.push(stringResult);				
			}	
		}
		
		//The last element in the stack is the total evaluated result of the epression.
		return stack.pop();
	}

}

class InfixToPostfix
{	
	//Converts an expression from infix notation to postfix.
	convertToPostFix(inExpr)
	{
		let stack = [];
		//Array containing the substrings of the expression excluding spaces.
		let exprArr = inExpr;
		//Store the expression in postfix notation.
		let postExpr = '';

		//index tracker	
		let i;
		
		//Scan the infix expression
		for (i = 0; i < exprArr.length; i++)
		{
			//Store the scanned character
			let exprChar = exprArr[i];
			
			if (exprChar === ' ')
			{
				continue;
			}
			//If exprChar is a digit OR  a '-' representing a neg. number (there shouldn't be a space after the '-' for neg. numbers)
			else if (!isNaN(exprChar) || (exprChar == '-' && i + 1 < exprArr.length && !isNaN(exprArr[i + 1]) && exprArr[i + 1] !== ' '))
			{
				//Append the digit to the string.
				postExpr += exprChar;
				
				//Append adjacent digits until a space is found.		
				while (i + 1 < exprArr.length && !isNaN(exprArr[i + 1]) && exprArr[i + 1] !== ' ')
				{
					exprChar = exprArr[++i];
					postExpr += exprChar;
				}
				
				//Append a space after the operand is inserted
				postExpr += ' ';
			}
			//If the scanned string is '(' OR ')' OR a '-' representing a neg. number in front of an opening parenthesis (ex: -(2 + 3) or -(-2 + 3)
			else if (exprChar === '(' || exprChar === ')')
			{	
				//Push all left paranthesis into the stack
				if (exprChar === '(') 
				{
					stack.push(exprChar);
				}
				//exprChar == ')'. Pop all elements from the stack until a '(' is found
				else
				{
					//Append everything from the stack before a '(' is found.
					while (stack.length > 0 && stack[stack.length - 1] !== '(') 
					{
						postExpr += stack.pop() + ' ';
					}
						
					//Discard the '('
					stack.pop();
				}
			}
			//If the scanned string is an operator
			else if (exprChar === '+' || exprChar === '-' || exprChar === '*' || exprChar === '/')
			{
				/*
				 Runs if-statement when:					 
				 - Stack is empty.
				 - Top of the stack is a '('
				 - If the scanned operator's precedence is greater than
				 the operator that's on top of the stack.
				 */
				if (stack.length === 0 || stack[stack.length - 1] === '('
					|| this.precedence(exprChar) > this.precedence(stack[stack.length - 1])) 
				{
					//Push it into the stack
					stack.push(exprChar);
				} 
				/*
				Pop and append all operators from the stack that have
				greater precedence than the scanned operator.
							
				If a '(' is found later in the stack, stop there and push the operator
				into the stack.
				*/
				else 
				{
					while (stack.length > 0 && stack[stack.length - 1] !== '('
						  && this.precedence(exprChar) <= this.precedence(stack[stack.length - 1])) 
					{
						postExpr += stack.pop() + ' ';
					}

						//Push this character into the stack.
						stack.push(exprChar);
				}
			}
			//Invalid character found
			else
			{
				return 'Invalid Expression.';
			}
		}
					
		//Pop the rest of the stack and append them into the string
		while (stack.length > 0)
		{
			postExpr += stack.pop() + ' ';
		}
	
		//Remove the space at the end of the string.
		postExpr = postExpr.substring(0, postExpr.length - 1);
		
		return postExpr;
	 }
		
	//Utility function for method convertToPostFix. Return precedence of the operator
	precedence(exprChar)
	{
		if (exprChar === '+' || exprChar === '-')
		{
			return 1;
		}
		else 
		{
			return 2;
		}
	}

}

function handleKeyPress(event)
{
	event.preventDefault();
	let infixInput = document.getElementById("userInput").value;
	
	let calculator = new Calculator();
	let converter = new InfixToPostfix();

	let postfixInput = converter.convertToPostFix(infixInput);
	let result = calculator.evaluate(postfixInput);
	
	document.getElementById("userOutput").innerHTML = result;
}