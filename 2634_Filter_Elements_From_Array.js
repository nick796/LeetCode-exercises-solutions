/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
   var numbers = []
   for (let i=0; i<arr.length;i++)
   {
     if (fn(arr[i],i)) {
        numbers.push(arr[i])
     }
   }
   return numbers
};