

/**
 * Given a credit card number, this function should return a string
 * with the name of a network, like 'MasterCard' or 'American Express'
 *
 * Example: detectNetwork('343456789012345') should return 'American Express'
 *
 * How can you tell one card network from another? Easy!
 * There are two indicators:
 *   1. The first few numbers (called the prefix)
 *   2. The number of digits in the number (called the length)
 *
 * Note: `cardNumber` will always be a string
 *
 * The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 * The American Express network always starts with a 34 or 37 and is 15 digits long
 *
 * Once you've read this, go ahead and try to implement this function, then return to the console.
 */
const detectNetwork = (cardNumber) => {
	// Diner's Club: starts with 38 or 39
	// 14 digits long: cardNumber.length === 14
	if ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length === 14) {
		return "Diner's Club";
	}
	
	// American Express: starts with 34 or 37
	// 15 digits long
	else if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length === 15) {
		return 'American Express';
	}
	
	// Visa always has a prefix of 4 and a length of 13, 16, or 19.
	else if (
        (cardNumber.startsWith('4903') || cardNumber.startsWith('4905') ||
        cardNumber.startsWith('4911') || cardNumber.startsWith('4936') ||
        cardNumber.startsWith('564182') || cardNumber.startsWith('633110') ||
        cardNumber.startsWith('6333') || cardNumber.startsWith('6759')) &&
        (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)
    ) {
        return 'Switch';
	}
	
	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	else if ((cardNumber.startsWith('51') 
		|| cardNumber.startsWith('52') 
		|| cardNumber.startsWith('53') 
		|| cardNumber.startsWith('54') 
		|| cardNumber.startsWith('55')) 
		
		&& cardNumber.length === 16) {
		return 'MasterCard';
	}
	
	// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	else if (
		(cardNumber.startsWith('6011') ||
			
		(parseInt(cardNumber.substring(0, 3)) >= 644 &&
			
		parseInt(cardNumber.substring(0, 3)) <= 649) || 
		
		cardNumber.startsWith('65')) && (cardNumber.length === 16 || cardNumber.length === 19)) {
		return 'Discover';
	}
	
	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	else if ((cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || 
		cardNumber.startsWith('5038') || 
		cardNumber.startsWith('6304')) 
		
		&& (cardNumber.length >= 12 && cardNumber.length <= 19)) {
			
		return 'Maestro';
	}
	
	//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	else if (
		(parseInt(cardNumber.substring(0, 6)) >= 622126 &&
			parseInt(cardNumber.substring(0, 6)) <= 622925) || 
		(parseInt(cardNumber.substring(0, 3)) >= 624 &&
			parseInt(cardNumber.substring(0, 3)) <= 626) ||
		(parseInt(cardNumber.substring(0, 4)) >= 6282 &&
			parseInt(cardNumber.substring(0, 4)) <= 6288) 
		&& (cardNumber.length >= 16 && cardNumber.length <= 19)) {
			return 'China UnionPay';
		}
	
// Write full test coverage for the Switch card
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
	
// Visa always has a prefix of 4 and a length of 13, 16, or 19.
	
	else if (
        cardNumber.startsWith('4') &&
        (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)
    ) {
        return 'Visa';
    } 

};
 



// ignore
typeof module !== 'undefined' && (module.exports = detectNetwork);


		