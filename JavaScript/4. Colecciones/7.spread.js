function suma(...nums) { // rest
    return nums.reduce((total, n) => total + n, 0);
}

const nums = [12, 6, 9, 20, 15];
console.log(suma(...nums)); // spread -> Equivale a llamar a suma(2, 6, 9, 20, 15)

console.log(Math.max(...nums)); // 20

const nums2 = [...nums]; // Clonando un array
nums2[0] = 999;
console.log(nums, nums2);

const a = [1,2,3,4];
const b = [5,6,7,8];
const c = [...a, ...b, 9, 10];
console.log(c);
