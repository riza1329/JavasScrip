const angel = require("./3.simple-module");
console.log(angel.getName());
// Maudy Ayunda
console.log(angel.brithday());
// 19 Desember 1994
console.log(angel.getHeroSong());
// Perahu Kertas


/*Export Multiple Method & Value*/

const getName = () => {
    return "Maudy Ayunda";
};

const getHeroSong = () => {
    return "Perahu Kertas";
};

const brithday = "19 Desember 1994";
exports.getName = getName;
exports.getHeroSong = getHeroSong;
exports.brithday = brithday;

/*Export Style
Terdapat dua cara yang bisa kita gunakan untuk melakukan export :*/

const getName = () => {
    return "Maudy Ayunda";

};

exports.getHeroSong = () => {
    return "Perahu Kertas"
};

exports.brithday = () => {
    return "19 Desember 1994";
};

exports.getName = getName;

/*Destructure Assignment
Kita juga dapat menggunakan destructure untuk menggunakan suatu module : */

const { brithday, getName } = require("./3.simple-module.js");

console.log('Maudy birthday is ${brithday}');
//  Maudy ayunda is 19 Desember 1994
console.log(getName());
// Maudy Ayunda