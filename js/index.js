// Massiv

// 1-masala

// function arrayColors(color1, color2, color3) {
//     let res = [color1, color2, color3];
//     return res;
// }

// 2-masala

// function arrayNumbers(num1, num2, num3) {
//     let res = [num1, num2, num3];
//     return res;
// }

// 3-masala

// function birinchiVaOxirgi(massiv) {
//     let res = [massiv[0], massiv[massiv.length - 1]];
   
//     return res;
// }

// console.log(birinchiVaOxirgi([1, 2, 3, 4, 5]));

// 4-masala

// function ikkinchiElementniOzgartir(massiv, yangiQiymat) {
//     return  massiv[1] = yangiQiymat; 
// }

// 5-masala

// function elementQoshish(massiv, element) {
//     return massiv.push(element); 
// }

// 6-masala

// function oxirgiElementniOchir(arr) {
//     return arr.pop();
// }

// 7-masala

// function massivningLengthniQaytar(massiv) {
//     return massiv.length;
// }

// console.log(massivningLengthniQaytar([1, 2, 3, 4, 5, 6, 7]));

// 8-masala

// function massivBoshigaElementQosh(massiv, element) {
//     return massiv.unshift[element];
// }

// 9-masala 

// function massivBoshigaElementQosh(massiv) {
//     return massiv.shift();
// }

// 10-masala

// function ikkiMassivniBirlashtir(massiv1, massiv2) {
//     for (let i = 0; i < massiv2.length; i++) {
//         massiv1.push(massiv2[i]);
//     }
//     return massiv1;
// }

// 11-masala 

// function massivdaBerilganElementBorliginiAniqlash(massiv, element) {
//     return massiv.includes(element);
// }

// 12-masala

// function alfavitBoyiichaSarala(massiv) {
//     return massiv.sort(function(a, b) {
//         return a.localeCompare(b);
//     });
// }

// 13-masala

// function massivdaBerilganElementningIndexiniTop(massiv, element) {
//     return massiv.indexOf(element);
// }

// 14-masala

// function elementniOchir(massiv, element) {
//     const indeks = massiv.indexOf(element);
//     if (indeks != -1) {
//         massiv.splice(indeks, 1);
//     }
//     return massiv;
// }

// 15-masala

// function massivdanOxirgiIkkiElementniOchirish(massiv) {
//     massiv.pop();
//     massiv.pop();
//     return massiv;
// }

// 16-masala 

// function ikkitaElementQosh(massiv, element1, element2) {
//     massiv.push(element1, element2);
//     return massiv;
// }

// 17-masala 

// function birinchiVaOxirgiAlmashtir(massiv) {
//     const birinchi = massiv[0];
//     const oxirgi = massiv[massiv.length - 1];

//     massiv[0] = oxirgi;
//     massiv[massiv.length - 1] = birinchi;

//     return massiv;
// }

// 18-masala

// function massivniTozalash(massiv) {
//     massiv.length = 0;
//     return massiv;
// }

// 19-masala

// function massivNusxasiniOlish(massiv) {
//     return massiv.slice(); // Slice() metodi orqali nusxa olamiz
// }

// 20-masala 

// function elementlarniTakrorlash(massiv) {
//     const takrorlanganMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         takrorlanganMassiv.push(massiv[i], massiv[i]);
//     }
//     return takrorlanganMassiv;
// }

// 21-masala

// function engKattaElement(massiv) {
//     let engKatta = massiv[0];
//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] > engKatta) {
//             engKatta = massiv[i];
//         }
//     }
//     return engKatta;
// }

// 22-masala 

// function engKichikElement(massiv) {
//     let engKichik = massiv[0];
//     for (let i = 1; i < massiv.length; i++) {
//         if (massiv[i] < engKichik) {
//             engKichik = massiv[i];
//         }
//     }
//     return engKichik;
// }

// 23-masala 

// function ortachaQiymat(massiv) {
//     let jami = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         jami += massiv[i];
//     }
//     return jami / massiv.length;
// }

// 24-masala

// function teskariTartib(massiv) {
//     return massiv.slice().reverse();
// }

// 25-masala

// function faqatMusbatSonlar(massiv) {
//     return massiv.filter(function(element) {
//         return element > 0;
//     });
// }

// 26-masala

// function elementlarniKopaytir(massiv) {
//     return massiv.map(function(element) {
//         return element * 2;
// }

// 27-masala

// function elementlarningKvadrati(massiv) {
//     return massiv.map(function(element) {
//         return Math.pow(element, 2); 
//     });
// }

// 28-masala

// function elementniOchir(massiv, element) {
//     const index = massiv.indexOf(element); 
//     if (index != -1) {
//         massiv.splice(index, 1); 
//     }
//     return massiv; 
// }

// 29-masala

// function mavjudliginiTekshir(massiv, element) {
//     return massiv.includes(element); 
// }

// 30-masala

// function uniq(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// 31-masala

// function summa(arr) {
//     return arr.reduce((total, current) => total + current, 0);
// }

// 32-masala

// function separateValues(array) {
//     let min = array[0];
//     let max = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }

//     return { min, max };
// }

// 33-masala

// function ikkiMassivniBirlashtir(massiv1, massiv2) {
//     for (let i = 0; i < massiv2.length; i++) {
//         massiv1.push(massiv2[i]);
//     }
//     return massiv1;
// }

// 34-masala

// function addNumberToArray(arr, number) {
//     const newArray = arr.map(item => item + number);
//     return newArray;
// }

// 35-masala

// function sortAndMultiply(arr) {
//     arr.sort(function(a, b) {
//         return a - b;
//  });
    
//     return arr; 
// }

//  Massiv metodlariga oid masalalar.

// Quyidagi masalarni funksiyalar yordamida ishlang.

// 1-masala

// function yangiElementQosh(massiv, element) {
//     return massiv.push(element);
// }

// 2-masala

// function oxirgiElementniOchir(massiv) {
//     return massiv.pop();
// }

// 3-masala

// function birinchiElementniOchir(massiv) {
//     return massiv.shift();
// }

// 4-masala

// function boshigaElementQosh(massiv, element) {
//     return massiv.unshift(element);
// }

// 5-masala

// function berilganElementBorliginiAniqla(massiv, element) {
//     return massiv.includes(element);
// }

// 6-masala

// function berilganElementniIndexiniTop(massiv, element) {
//     return massiv.indexOf(element);
// }

// 7-masala

// function berilganElementniIndexiniTop(massiv, element) {
//     return massiv.lastindexOf(element);
// }

// 8-masala

// function malumBirIndexdanBoshlabMalumBirSonniOchir(massiv, son, nechta) {
//     return massiv.splice(son, nechta)
// }

