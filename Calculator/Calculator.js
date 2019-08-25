class Calculator
{
	//Evaluate an expression that's in postfix notation.
	evaluate(postExpr)
	{
		//The expression
		let exprArr = postExpr.split(" ");
		//Used to enforce order of operations
		let stack = [];
		//Tracks exprArr index
		let i = 0;

		for (i = 0; i < exprArr.length; i++)
		{
				//skip spaces
				if (exprArr[i] === ' ')
				{
					continue;
				}
				//Gets the substring from the splitted expression
				let substring = exprArr[i];
				//If the scanned substring is an operand

				
				if(substring !== '+' && substring !== '-' && substring !== '*' && substring !== '/')
				{
					stack.push(substring);
				}
				else //If the scanned substring is an operator
				{				
					//Second operand
					let y = parseInt(stack.pop());
					//First operand
					let x = parseInt(stack.pop());
					
					//Perform operation and get the integer value
					let result;
					
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
					else // '/'
					{
						result = x / y;
					}		

					//Convert the result into a string to push into the stack.
					let stringResult = result.toString();
					stack.push(stringResult);
				}
		}
		
		//pop the result (which should be the only element in the stack by now) and output it.
		let finalResult = stack.pop();

		return finalResult;
		//return stack.pop();
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
			//If it is a digit
			else if (!isNaN(exprChar))
			{
				//Append the digit to the string.
				postExpr += exprChar;
				
				//Append adjacent digits until a space is found.		
				while (i + 1 < exprArr.length && !isNaN(exprArr[i + 1]) && exprArr[i + 1] !== ' ')
				{
					i++;
					exprChar = exprArr[i];
					postExpr += exprChar;
				}
				
				//Append a space after the operand is inserted
				postExpr += ' ';
					
			}
			//If the scanned string is a parenthesis
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