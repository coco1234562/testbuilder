const fc = require('../.ci/node_modules/fast-check');
const detectNetwork = require('../detectNetwork');

const arbitraryDigitStr = fc.oneof(
  fc.constant('0'),
  fc.constant('1'),
  fc.constant('2'),
  fc.constant('3'),
  fc.constant('4'),
  fc.constant('5'),
  fc.constant('6'),
  fc.constant('7'),
  fc.constant('8'),
  fc.constant('9'),
);

const assertCard = (card, expected) => {
  const returnedCard = detectNetwork(card);
  const isCorrectCard = returnedCard === expected;

  if (!isCorrectCard) {
    throw `Failed for card: "${card}" (len: ${card.length}), returned: "${returnedCard}"`;
  }
};

describe('Diner\'s Club', function() {
  it('should return "Diner\'s Club" when passed a 14 length card with a prefix of "38"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      (cardDigits) => {
        assertCard('38' + cardDigits, 'Diner\'s Club');
      },
    ));
  });

  it('should return "Diner\'s Club" when passed a 14 length card with a prefix of "39"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      (cardDigits) => {
        assertCard('39' + cardDigits, 'Diner\'s Club');
      },
    ));
  });


});

describe('American Express', function() {
  it('should return "American Express" when passed a 15 length card with a prefix of "34"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 13, 13),
      (cardDigits) => {
        assertCard('34' + cardDigits, 'American Express');
      },
    ));
  });

  it('should return "American Express" when passed a 15 length card with a prefix of "37"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 13, 13),
      (cardDigits) => {
        assertCard('37' + cardDigits, 'American Express');
      },
    ));
  });


});

describe('Visa', function() {
  it('should return "Visa" when passed a 13 length card with a prefix of "4"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      (cardDigits) => {
        assertCard('4' + cardDigits, 'Visa');
      },
    ));
  });

  it('should return "Visa" when passed a 16 length card with a prefix of "4"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits) => {
        if (
          cardDigits.startsWith('903') ||
          cardDigits.startsWith('905') ||
          cardDigits.startsWith('911') ||
          cardDigits.startsWith('936')
        ) {
          return true;
        }
        assertCard('4' + cardDigits, 'Visa');
      },
    ));
  });

  it('should return "Visa" when passed a 19 length card with a prefix of "4"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 18, 18),
      (cardDigits) => {
        if (
          cardDigits.startsWith('903') ||
          cardDigits.startsWith('905') ||
          cardDigits.startsWith('911') ||
          cardDigits.startsWith('936')
        ) {
          return true;
        }
        assertCard('4' + cardDigits, 'Visa');
      },
    ));
  });


});

describe('MasterCard', function() {
  it('should return "MasterCard" when passed a 16 length card with a prefix of "51" to "55"', function() {
    fc.assert(fc.property(
      fc.integer(51, 55),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      (prefix, cardDigits) => {
        assertCard(prefix + cardDigits, 'MasterCard');
      },
    ));
  });

});

describe('Discover', function() {
  it('should return "Discover" when passed a 16 or 19 length card with a prefix of "6011"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits15) => {
        assertCard('6011' + cardDigits12, 'Discover');
        assertCard('6011' + cardDigits15, 'Discover');
      },
    ));
  });

  it('should return "Discover" when passed a 16 or 19 length card with a prefix of "644" to "649"', function() {
    fc.assert(fc.property(
      fc.integer(644, 649),
      fc.stringOf(arbitraryDigitStr, 13, 13),
      fc.stringOf(arbitraryDigitStr, 16, 16),
      (prefix, cardDigits13, cardDigits19) => {
        assertCard(prefix + cardDigits13, 'Discover');
        assertCard(prefix + cardDigits19, 'Discover');
      },
    ));
  });

  it('should return "Discover" when passed a 16 or 19 length card with a prefix of "65"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 17, 17),
      (cardDigits14, cardDigits17) => {
        assertCard('65' + cardDigits14, 'Discover');
        assertCard('65' + cardDigits17, 'Discover');
      },
    ));
  });


});

describe('Maestro', function() {
  it('should return "Maestro" when passed a 12-19 length card with a prefix of "5018"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 8, 15),
      (cardDigits) => {
        assertCard('5018' + cardDigits, 'Maestro');
      },
    ));
  });

  it('should return "Maestro" when passed a 12-19 length card with a prefix of "5020"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 8, 15),
      (cardDigits) => {
        assertCard('5020' + cardDigits, 'Maestro');
      },
    ));
  });

  it('should return "Maestro" when passed a 12-19 length card with a prefix of "5038"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 8, 15),
      (cardDigits) => {
        assertCard('5038' + cardDigits, 'Maestro');
      },
    ));
  });

  it('should return "Maestro" when passed a 12-19 length card with a prefix of "6304"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 8, 15),
      (cardDigits) => {
        assertCard('6304' + cardDigits, 'Maestro');
      },
    ));
  });


});

describe('China UnionPay', function() {
  it('should return "China UnionPay" when passed a 16-19 length card with a prefix of "622126" to "622925"', function() {
    fc.assert(fc.property(
      fc.integer(622126, 622925),
      fc.stringOf(arbitraryDigitStr, 10, 13),
      (prefix, cardDigits) => {
        assertCard(prefix + cardDigits, 'China UnionPay');
      },
    ));
  });

  it('should return "China UnionPay" when passed a 16-19 length card with a prefix of "624" to "626"', function() {
    fc.assert(fc.property(
      fc.integer(624, 626),
      fc.stringOf(arbitraryDigitStr, 13, 16),
      (prefix, cardDigits) => {
        assertCard(prefix + cardDigits, 'China UnionPay');
      },
    ));
  });

  it('should return "China UnionPay" when passed a 16-19 length card with a prefix of "6282" to "6288"', function() {
    fc.assert(fc.property(
      fc.integer(6282, 6288),
      fc.stringOf(arbitraryDigitStr, 12, 15),
      (prefix, cardDigits) => {
        assertCard(prefix + cardDigits, 'China UnionPay');
      },
    ));
  });


});

describe('Switch', function() {
  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "4903"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('4903' + cardDigits12, 'Switch');
        assertCard('4903' + cardDigits14, 'Switch');
        assertCard('4903' + cardDigits15, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "4905"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('4905' + cardDigits12, 'Switch');
        assertCard('4905' + cardDigits14, 'Switch');
        assertCard('4905' + cardDigits15, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "4911"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('4911' + cardDigits12, 'Switch');
        assertCard('4911' + cardDigits14, 'Switch');
        assertCard('4911' + cardDigits15, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "4936"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('4936' + cardDigits12, 'Switch');
        assertCard('4936' + cardDigits14, 'Switch');
        assertCard('4936' + cardDigits15, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "564182"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 10, 10),
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 13, 13),
      (cardDigits10, cardDigits12, cardDigits13) => {
        assertCard('564182' + cardDigits10, 'Switch');
        assertCard('564182' + cardDigits12, 'Switch');
        assertCard('564182' + cardDigits13, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "633110"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 10, 10),
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 13, 13),
      (cardDigits10, cardDigits12, cardDigits13) => {
        assertCard('633110' + cardDigits10, 'Switch');
        assertCard('633110' + cardDigits12, 'Switch');
        assertCard('633110' + cardDigits13, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "6333"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('6333' + cardDigits12, 'Switch');
        assertCard('6333' + cardDigits14, 'Switch');
        assertCard('6333' + cardDigits15, 'Switch');
      },
    ));
  });

  it('should return "Switch" when passed a 16, 18, or 19 length card with a prefix of "6759"', function() {
    fc.assert(fc.property(
      fc.stringOf(arbitraryDigitStr, 12, 12),
      fc.stringOf(arbitraryDigitStr, 14, 14),
      fc.stringOf(arbitraryDigitStr, 15, 15),
      (cardDigits12, cardDigits14, cardDigits15) => {
        assertCard('6759' + cardDigits12, 'Switch');
        assertCard('6759' + cardDigits14, 'Switch');
        assertCard('6759' + cardDigits15, 'Switch');
      },
    ));
  });


});
