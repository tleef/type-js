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

export default {
  isString,
  isNumber,
  isObject,
  isFunction
}

export {
  isString,
  isNumber,
  isObject,
  isFunction
}
