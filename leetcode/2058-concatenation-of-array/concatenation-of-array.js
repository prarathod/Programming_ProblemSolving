/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let nums1 = nums;
    return [...nums, ...nums1];
};