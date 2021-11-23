const words = ['abc','xyz','abcxyz']
console.log(words.every(word => {
    word.length > 3;
}))

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
let propName = 'color';
console.log(spaceship[propName]);
delete spaceship.homePlanet;
console.log(spaceship);