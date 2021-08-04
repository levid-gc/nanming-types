export function curry2<TArg1, TArg2, TResult>(
  fp: (arg1: TArg1, arg2: TArg2) => TResult
) {
  return function(arg1: TArg1) {
    return function(arg2: TArg2) {
      return fp(arg1, arg2);
    };
  };
}
