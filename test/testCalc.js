const calc = require('../calculator');
const assert = require('assert');
const { expect } = require('chai');
const except = require('chai').expect;


describe('Test calculator basics',() =>{
    it('adding 1 + 1 = 2', ()=>{
        actual_result = calc.add(1, 1);
        expected_result = 2;
        expect(expected_result).to.equal(actual_result)
    });
});

describe('Test calculator basics',() =>{
    it('substract 4 - 1 = 3', ()=>{
        actual_result = calc.min(4, 1);
        expected_result = 3;
        expect(expected_result).to.equal(actual_result)
    });
});

describe('Test calculator basics',() =>{
    it('multiply 4 * 3 = 12', ()=>{
        actual_result = calc.multiply(4, 3);
        expected_result = 12;
        expect(expected_result).to.equal(actual_result)
    });
});

describe('Test calculator basics',() =>{
    it('devide 6 / 3 = 2', ()=>{
        actual_result = calc.div(6, 3);
        expected_result = 2;
        expect(expected_result).to.equal(actual_result)
    });
    it('devide 6 / 0  will throw error', ()=>{
        expect(()=>{calc.div(6, 0)}).to.throw('Cannot Devide by Zero!');
    });
});