import * as R from "ramda";

import { curry2 } from "./curry2";

export const checkType = curry2(function(typeDef, actualType) {
  if (R.is(typeDef, actualType)) {
    return actualType;
  } else {
    throw new TypeError(
      `Type mismatch. Expected [${typeDef}] but found [${typeof actualType}]`
    );
  }
});
