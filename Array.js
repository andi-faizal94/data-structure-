const items = [1, 2, 3, 'fruit'];
items.push(1);
items.unshift(2);
items.pop();
items.unshift(1, 2);
items.length;

console.log(items.length, 'this is length array');

for (const item of items) {
  console.log(item);
}
