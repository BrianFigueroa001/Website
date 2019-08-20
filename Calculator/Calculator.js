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
		return stack.pop();
	}

}

class InfixToPostfix
{	
	constructor()
	{
		//Used to store parenthesis and operators
		this.stack = [];
	}
	
	//Converts an expression from infix notation to postfix.
	convertToPostFix(inExpr)
	{
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
			else if (isNaN(exprChar) === false)
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
					this.stack.push(exprChar);
				}
				//exprChar == ')'. Pop all elements from the stack until a '(' is found
				else
				{
					//Append everything from the stack before a '(' is found.
					while (this.stack.length > 0 && this.stack[this.stack.length - 1] !== '(') 
					{
						postExpr += this.stack.pop() + ' ';
					}
						
					//Discard the '('
					this.stack.pop();
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
				if (this.stack.length === 0 || this.stack[this.stack.length - 1] === '('
					|| precedence(exprChar) > precedence(this.stack[this.stack.length - 1])) 
				{
					//Push it into the stack
					this.stack.push(exprChar);
				} 
				/*
				Pop and append all operators from the stack that have
				greater precedence than the scanned operator.
							
				If a '(' is found later in the stack, stop there and push the operator
				into the stack.
				*/
				else 
				{
					while (this.stack.length > 0 && this.stack[this.stack.length - 1] !== '('
						  && precedence(exprChar) <= precedence(this.stack[this.stack.length - 1])) 
					{
						postExpr += this.stack.pop() + ' ';
					}

						//Push this character into the stack.
						this.stack.push(exprChar);
				}
			}
			//Invalid character found
			else
			{
				return 'Invalid_expression.';
			}
		}
					
		while (this.stack.length > 0)
		{
			if (this.stack.length - 1 > 0)
			{
				postExpr += this.stack.pop() + ' ';
			}
			else
			{
				postExpr += this.stack.pop();
			}
		}
	
		return postExpr;
	 }
		

}

//Utility function for method convertToPostFix. Return precedence of the operator
function precedence(exprChar)
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