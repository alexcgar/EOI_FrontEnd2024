const set = new Set();
set.add("manzana");
set.add("pera");
set.add("plátano");
set.add("melón");

console.log(set);
console.log(set.has("pera")); // true
console.log(set.has("tomate")); // false

set.add("pera");
set.add("pera");
set.add("pera");

console.log(set);
console.log(set.size); // 4
set.delete("pera");
console.log(set);

for(let fruta of set) {
    console.log(fruta);
}

set.forEach((fruta) => console.log(fruta));

let nums = [1,3,2,5,1,5,2,3,4,1,6,5,3,2,4];
let numSet = new Set(nums);
console.log(numSet);
nums = Array.from(numSet);
console.log(nums);
