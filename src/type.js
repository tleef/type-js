const isString = (o) => {
  return typeof o === 'string'
}

const isNumber = (o) => {
  return typeof o === 'number' && !isNaN(o) && isFinite(o)
}

const isObject = (o) => {
  return typeof o === 'object' && !!o && !Array.isArray(o)
}

export default {
  isString,
  isNumber,
  isObject
}

export {
  isString,
  isNumber,
  isObject
}
