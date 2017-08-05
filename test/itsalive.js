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

describe('SetTimeout', ()=> {
  it('1000ms', (done)=>{
    let start = new Date();
    setTimeout( ()=> {
      let duration = new Date() - start;
      expect(duration).to.be.closeTo(1000, 50);
      done();
    }, 1000);
  });
});
