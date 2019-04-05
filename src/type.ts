const isBoolean = (o: any): boolean => {
  return o === true || o === false;
};

const isFunction = (o: any): boolean => {
  return typeof o === "function";
};

const isInteger = (o: any): boolean => {
  return Number.isInteger(o);
};

const isNumber = (o: any): boolean => {
  return typeof o === "number" && !isNaN(o) && isFinite(o);
};

const isObject = (o: any): boolean => {
  return typeof o === "object" && !!o && !Array.isArray(o);
};

const isRegExp = (o: any): boolean => {
  return o instanceof RegExp;
};

const isString = (o: any): boolean => {
  return typeof o === "string";
};

export default {
  isBoolean,
  isFunction,
  isInteger,
  isNumber,
  isObject,
  isRegExp,
  isString,
};

export {
  isBoolean,
  isFunction,
  isInteger,
  isNumber,
  isObject,
  isRegExp,
  isString,
};
