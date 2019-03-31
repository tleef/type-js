const isString = (o: any): boolean => {
  return typeof o === "string";
};

const isNumber = (o: any): boolean => {
  return typeof o === "number" && !isNaN(o) && isFinite(o);
};

const isObject = (o: any): boolean => {
  return typeof o === "object" && !!o && !Array.isArray(o);
};

const isFunction = (o: any): boolean => {
  return typeof o === "function";
};

const isRegExp = (o: any): boolean => {
  return o instanceof RegExp;
};

export default {
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
};

export {
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
};
