// Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes

// You may consider that there will not be any empty arrays/vectors.





// It's the spread operator which unpacks arguments. In this instance it unpacks all the items from list which serves as multiple arguments in the Math.min/Math.max function. It allows all values to be compared individually instead of trying to find the max/min of an array (which can't be done).
const min = (list) => Math.min(...list)
const max = (list) => Math.max(...list)