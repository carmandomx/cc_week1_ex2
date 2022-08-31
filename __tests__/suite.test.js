const { palindrome } = require('../exercise');

test('Testing the palindrome exercise', () => { 
    expect(palindrome('a')).toBeDefined();
    expect(palindrome('race a car')).toBe(false)
    expect(palindrome('madam')).toBe(true);
    expect(palindrome('taco cat')).toBe(true);
    expect(palindrome('noon')).toBe(true);
    expect(palindrome('almost a palindrome')).toBe(false);
 })