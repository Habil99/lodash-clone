// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"

/**
 * Lodash Clone
 * */

import { chunk } from "./array/chunk"
import { compact } from "./array/compact"
import { concat } from "./array/concat"

const _ = { chunk, compact, concat }

// console.log(_.chunk([1, 2, 3, 4, 5, 6, 7], 2))
// console.log(compact([0, 1, false, 2, '', 3]))
console.log(_.concat([1], 2, "c", [4], [[3]]))
