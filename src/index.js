import fruits from './foods';
import {choice, remove} from './helpers.js';

let randFruit = choice(fruits);

console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log('Delicious! May I have another?');

let fruitsLeft = remove(fruits, randFruit);

console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left`);