# Object.keys() in JavaScript
==> 检查Object是否为空，需要使用 Object.keys(obj).length 查看object的key值长度

Object.keys()是 JavaScript 中的内置方法，允许您从 obj对象 中 提取 property names 属性名称 (keys) 形成一个 array数组。

它用于以数组形式检索对象的所有可枚举属性键。`Object.keys(obj);`

```JavaScript
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const keys = Object.keys(person);
console.log(keys);  // Output: ["name", "age", "city"] =>所有的key值
```

需要注意的是，`Object.keys(obj)` 仅检索 obj对象 自身 property属性 的key，而不是其 `Prototype Chain原型链` 中的 key。

如果要获取所有可枚举property属性，包括从 `Prototype Chain原型链` 继承的 property属性，

可以使用循环  for...in  或 Object.keys() 与 结合Object.getPrototypeOf()

```JavaScript
function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function() {
  return 'Some generic sound';
};

function Dog(breed) {
  this.breed = breed;
}

Dog.prototype = new Animal('Dog');

const myDog = new Dog('Labrador');

for (let key in myDog) {
  console.log(key); // Output: "breed", "species", "sound"
}
```

**Output and Test Case**
```JavaScript
const keys = Object.keys(myDog);
const prototypeKeys = Object.keys(Object.getPrototypeOf(myDog));
console.log(keys); // Output: ["breed"] => 在这里 只能 返回输出 自己  myDog 的属性 “breed” myDog
console.log(prototypeKeys); // Output: ["species", "sound"] // 在这里 返回继承的属性“species”和“sound”。
```
