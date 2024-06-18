function calculator(operation, num1, num2) {
    let result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        default:
            console.log("Error: Invalid operation. Please choose 'add', 'subtract', 'multiply', or 'divide'.");
            return;
    }

    console.log(`The result is: ${result}`);
}

// Test the calculator function
calculator('add', 5, 3);       // Output: The result is: 8
calculator('subtract', 5, 3);  // Output: The result is: 2
calculator('multiply', 5, 3);  // Output: The result is: 15
calculator('divide', 5, 3);    // Output: The result is: 1.6666666666666667
calculator('divide', 5, 0);    // Output: Error: Division by zero is not allowed.