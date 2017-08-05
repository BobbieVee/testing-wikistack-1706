const mocha = require('mocha');
const expect = require('chai').expect;

const add = (num1, num2)=> {
	return num1 + num2;
}

describe('Adding', ()=> {
	it('two numbers', ()=> {
     expect(add(2,4)).to.equal(6);
	});
});

