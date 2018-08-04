const isString = (o) => {
  return typeof o === 'string'
}

const isNumber = (o) => {
  return typeof o === 'number' && !isNaN(o) && isFinite(o)
}

const isObject = (o) => {
  return typeof o === 'object' && !!o && !Array.isArray(o)
}

const isFunction = (o) => {
  return typeof o === 'function'
}

const isRegExp = (o) => {
  return o instanceof RegExp
}

export default {
  isString,
  isNumber,
  isObject,
  isFunction,
  isRegExp
}

export {
  isString,
  isNumber,
  isObject,
  isFunction,
  isRegExp
}
