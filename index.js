var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function appendKitten(name) {return kittens.concat(name);}
function prependKitten(name) {return name.concat(kittens);}
function removeLastKitten() {return kittens.slice(-animals.length + 1);}
function removeFirstKitten() {return kittens.slice(-animals.length + 1);}
