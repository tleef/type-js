/* eslint-env mocha */

import chai from 'chai'

import type, { isString, isNumber, isObject, isFunction, isRegExp } from './type'

const expect = chai.expect

describe('type', () => {
  describe('isString()', () => {
    it('should return true for string literal', () => {
      expect(isString('test')).to.equal(true)
    })

    it('should return true for template literal', () => {
      expect(isString(`test ${1}`)).to.equal(true)
      expect(isString(
        `test ${1}
        test ${2}`
      )).to.equal(true)
    })

    it('should return true for String', () => {
      expect(isString(String('test'))).to.equal(true)
      expect(isString(String(123))).to.equal(true)
    })

    it('should return false for new String', () => {
      expect(isString(new String('test'))).to.equal(false) // eslint-disable-line
    })
  })

  describe('isNumber()', () => {
    it('should return true for number literal', () => {
      expect(isNumber(123)).to.equal(true)
    })

    it('should return true for Number', () => {
      expect(isNumber(Number(123))).to.equal(true)
      expect(isNumber(Number('123'))).to.equal(true)
    })

    it('should return false for new Number', () => {
      expect(isNumber(new Number(123))).to.equal(false) // eslint-disable-line
    })

    it('should return false for NaN', () => {
      expect(isNumber(NaN)).to.equal(false)
    })

    it('should return false for Infinity', () => {
      expect(isNumber(Infinity)).to.equal(false)
      expect(isNumber(-Infinity)).to.equal(false)
    })
  })

  describe('isObject()', () => {
    it('should return true for object literal', () => {
      expect(isObject({})).to.equal(true)
    })

    it('should return true for Object', () => {
      expect(isObject(Object())).to.equal(true)
    })

    it('should return true for new Object', () => {
      expect(isObject(new Object())).to.equal(true) // eslint-disable-line
    })

    it('should return false for array literal', () => {
      expect(isObject([])).to.equal(false)
    })

    it('should return false for Array', () => {
      expect(isObject(Array())).to.equal(false) // eslint-disable-line
    })

    it('should return false for new Array', () => {
      expect(isObject(new Array())).to.equal(false) // eslint-disable-line
    })

    it('should return false for function literal', () => {
      expect(isObject(function () {})).to.equal(false)
    })

    it('should return false for arrow function literal', () => {
      expect(isObject(() => {})).to.equal(false)
    })

    it('should return false for Function', () => {
      expect(isObject(Function())).to.equal(false) // eslint-disable-line
    })

    it('should return false for new Function', () => {
      expect(isObject(new Function())).to.equal(false) // eslint-disable-line
    })
  })

  describe('isFunction()', () => {
    it('should return true for function literal', () => {
      expect(isFunction(function () {})).to.equal(true)
    })

    it('should return true for lambda literal', () => {
      expect(isFunction(() => {})).to.equal(true)
    })

    it('should return true for Function', () => {
      expect(isFunction(Function())).to.equal(true) // eslint-disable-line
    })

    it('should return true for new Function', () => {
      expect(isFunction(new Function())).to.equal(true) // eslint-disable-line
    })
  })

  describe('isRegExp()', () => {
    it('should return true for regexp literal', () => {
      expect(isRegExp(/\w+/)).to.equal(true)
    })

    it('should return true for new RegExp', () => {
      expect(isRegExp(new RegExp('\\w+'))).to.equal(true)
    })
  })

  describe('#isString()', () => {
    it('should be equal to isString', () => {
      expect(type.isString).to.equal(isString)
    })
  })

  describe('#isNumber()', () => {
    it('should be equal to isNumber', () => {
      expect(type.isNumber).to.equal(isNumber)
    })
  })

  describe('#isObject()', () => {
    it('should be equal to isObject', () => {
      expect(type.isObject).to.equal(isObject)
    })
  })

  describe('#isFunction()', () => {
    it('should be equal to isFunction', () => {
      expect(type.isFunction).to.equal(isFunction)
    })
  })

  describe('#isRegExp()', () => {
    it('should be equal to isRegExp', () => {
      expect(type.isRegExp).to.equal(isRegExp)
    })
  })
})
