const isValidParenthesis = (s) => {
    let stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (map[char]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket
            if (stack.length === 0) {
                return false; // No matching opening bracket found
            }
            const top = stack.pop();
            if (map[top] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // If there are still unmatched opening brackets
    return stack.length === 0;
};

// Test cases
console.log(isValidParenthesis("()[]{}")); // Output: true
console.log(isValidParenthesis("()")); // Output: true
console.log(isValidParenthesis("(]")); // Output: false
