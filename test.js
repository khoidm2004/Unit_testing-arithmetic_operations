
const chai = require('chai');
const expect = chai.expect;
const mylib = require('./mylib');

describe('mylib', () => {
  before(() => {
    console.log('Starting tests...');
  });

  after(() => {
    console.log('All tests completed.');
  });

  it('should add two numbers', () => {
    expect(mylib.add(5, 3)).to.equal(8);
  });

  it('should subtract two numbers', () => {
    expect(mylib.subtract(5, 3)).to.equal(2);
  });

  it('should multiply two numbers', () => {
    expect(mylib.multiply(5, 3)).to.equal(15);
  });

  it('should divide two numbers', () => {
    expect(mylib.divide(6, 2)).to.equal(3);
  });

  it('should throw error for division by zero', () => {
    expect(() => mylib.divide(6, 0)).to.throw('Zero Division');
  });
  
});
