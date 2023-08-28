mocha.setup('bdd');

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  it('Throws an error so it fails', function() {
    throw new Error('This test should fail');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    const isEven = num => num % 2 === 0;
    if (isEven(10) !== true) {
      throw new Error('10 should be even!');
    }
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    const isEven = num => num % 2 === 0;
    if (isEven(12) !== true) {
      throw new Error('11 should be even!');
    }
  });
});

// Diner's Club tests
describe("Diner's Club", function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== "Diner's Club") {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== "Diner's Club") {
      throw new Error('Test failed');
    }
  });
});


// American Express tests
describe('American Express', function() {
  const assert = chai.assert;

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

// Visa tests
describe('Visa', function() {
  const assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});



// MasterCard tests
describe('MasterCard', function() {
  const expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});




// Discover tests
describe('Discover', function() {
  const expect = chai.expect;

  it('has a prefix of 6011, 644-649, or 65 and a length of 16 or 19', function() {
    expect(detectNetwork('6011432932039421')).to.equal('Discover');
  });

  it('has a prefix of 6011, 644-649, or 65 and a length of 16 or 19', function() {
    expect(detectNetwork('6442341103492435')).to.equal('Discover');
  });
});



// Maestro tests
describe('Maestro', function() {
  const expect = chai.expect;

  it('has a prefix of 5018, 5020, 5038, or 6304 and a length of 12-19', function() {
    expect(detectNetwork('501832342302')).to.equal('Maestro');
  });

  it('has a prefix of 5018, 5020, 5038, or 6304 and a length of 12-19', function() {
    expect(detectNetwork('502042342302')).to.equal('Maestro');
  });
});




// China UnionPay tests
describe('China UnionPay', function() {
  const expect = chai.expect;

  it('has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19', function() {
    expect(detectNetwork('6221267890123456')).to.equal('China UnionPay');
  });

  it('has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19', function() {
    expect(detectNetwork('6229253242345234')).to.equal('China UnionPay');
  });
});




// Switch tests
describe('Switch', function() {
  const expect = chai.expect;

  it('has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19', function() {
    expect(detectNetwork('4903234234213453')).to.equal('Switch');
  });

  it('has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19', function() {
    expect(detectNetwork('675923423421345345')).to.equal('Switch');
  });
});

mocha.run();
