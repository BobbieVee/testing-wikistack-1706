//const mocha = require('mocha');
//const expect = require('chai').expect;
//
//var chai = require('chai');
//var spies = require('chai-spies');
//chai.use(spies);
//
//const add = (num1, num2)=> {
//	return num1 + num2;
//}
//
//describe('Adding', ()=> {
//	it('two numbers', ()=> {
//     expect(add(2,4)).to.equal(6);
//	});
//});
//
//describe('SetTimeout', ()=> {
//  it('1000ms', (done)=>{
//    let start = new Date();
//    setTimeout( ()=> {
//      let duration = new Date() - start;
//      expect(duration).to.be.closeTo(1000, 50);
//      done();
//    }, 1000);
//  });
//});
//
//describe('spies',() => {
//  it('will invoke a function once per element', function () {
//    const arr = ['x','y','z'];
//    function logNth (val, idx) {
//      console.log('Logging elem #'+idx+':', val);
//    }
//    logNth = chai.spy(logNth);
//    arr.forEach(logNth);
//    expect(logNth).to.have.been.called.exactly(arr.length);
//  });
//});
//
//
//describe('Confirmation Bias', ()=>{
//  it('returns the larger of two numbers',  ()=> {
//    var larger = Math.max(5,7);
//    expect(larger).to.equal(7);
//  });
//});
//
