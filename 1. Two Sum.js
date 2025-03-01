/**
 * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** 
 * my solution -> O(n^2)
 */
var twoSum_1 = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i, j];
            }
        }
    }
};

/** 
 * After sawing editorial solution -> O(n)
 */
var twoSum_2 = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const x = target - nums[i];
        if(map.has(x)){
            console.log(x, map.get(x));
            return [map.get(x), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
