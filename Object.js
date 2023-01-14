const objectAnimal = {
  name: 'Mixue',
  age: 1,
  owner: 'Reza',
};

const NewAminal = { ...objectAnimal, owner: 'Nami' };
console.log('Is New Animal', NewAminal);
console.log('Is Default Animal', NewAminal);
console.log(objectAnimal);
console.log(objectAnimal['name']);
console.log(objectAnimal.age);
console.log(objectAnimal['age']);
console.log(objectAnimal['name'].hasOwnProperty('Unta'));
// use For .. In on Object
for (const [key, value] in objectAnimal) {
  console.log(`${key} ${value}`);
}
