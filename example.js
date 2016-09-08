//Example
var ary = ["A", "B", "C", "D", "E"];

//length 取得長度
console.log(ary.length); //5

//push 新增一個F在陣列最後方
console.log(ary.push("F")); //6

//pop 刪除陣列最後一個值
console.log(ary.pop()); //"F"

//unshift 新增一個F在陣列最前方
console.log(ary.unshift("F")); //6

//shift 刪除陣列第一個值
console.log(ary.shift()); //"F"

//splice(insert) 新增 F 在a[3] 位置
console.log(ary.splice(3, 0, "F")); //[]

//splice(remove) 刪除a[3]
console.log(ary.splice(3, 1)); //["F"]

//indexOf // D在陣列中第一次出現的位置
console.log(ary.indexOf("D")); //3

//lastIndexOf D在陣列中最後一次出現的位置
console.log(ary.lastIndexOf("D")); //3

//join 用:分開的字串
console.log(ary.join(":")); //"A:B:C:D:E"

//reverse 陣列反轉
console.log(ary.reverse()); //["E", "D", "C", "B", "A"]

//sort 陣列排序
console.log(ary.sort()); //["A", "B", "C", "D", "E"]

//some 看C有沒有在陣列中出現 true=>有,  false=>沒有
console.log(ary.some(function(item) {
	return item === "C";
})); //true

//every ?????
console.log(ary.every(function(item) {
	return item.length === 1;
})); //true

//forEach  ?????
console.log(ary.forEach(function(item) {
	return item;
})); //undefined

//reduce 陣列轉字串
console.log(ary.reduce(function(prevItem, item) {
	return prevItem + item;
})); //"ABCDE"

//reduceRight 反轉陣列轉字串
console.log(ary.reduceRight(function(prevItem, item) {
	return prevItem + item;
})); //"EDCBA"

//map 陣列...加東西!?
console.log(ary.map(function(item) {
	return item + item;
})); //["AA", "BB", "CC", "DD", "EE"]

//filter  依序列出大於C的值
console.log(ary.filter(function(item) {
	return item > "C";
})); //["D", "E"]

//slice 取a[2]~a[3]的值
console.log(ary.slice(2, 4)); //["C", "D"]

//concat 陣列最後方加入 ["G", "H"]
console.log(ary.concat(["G", "H"])); //["A", "B", "C", "D", "E", "G", "H"]
