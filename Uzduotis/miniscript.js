/*
Java script mini uzduotis

*/

///1
const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

//2
const tekstas1 = ('Labas rytas')
console.log(tekstas1);
const tekstas2 = ('Laba diena');
console.log(tekstas2);

const tekstas3 = ('Labas vakaras');
console.log(tekstas3);

//3
const sarasas11 = [1, 2, 3, 4, 5];
console.log(sarasas11[0]);
console.log(sarasas11[1]);
console.log(sarasas11[2]);
console.log(sarasas11[3]);
console.log(sarasas11[4]);

const sarasas12 = [6, 7, 8, 9, 10];
console.log(sarasas12[0]);
console.log(sarasas12[1]);
console.log(sarasas12[2]);
console.log(sarasas12[3]);
console.log(sarasas12[4]);

const sarasas13 = [11, 12, 13, 14, 15];
console.log(sarasas13[0]);
console.log(sarasas13[1]);
console.log(sarasas13[2]);
console.log(sarasas13[3]);
console.log(sarasas13[4]);

const sarasas21 = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(sarasas21[0]);
console.log(sarasas21[1]);
console.log(sarasas21[2]);
console.log(sarasas21[3]);
console.log(sarasas21[4]);

const sarasas22 = ['Ana', 'Ona', 'Una', 'Ina', 'Inga'];
console.log(sarasas22[0]);
console.log(sarasas22[1]);
console.log(sarasas22[2]);
console.log(sarasas22[3]);
console.log(sarasas22[4]);

const sarasas23 = ['masina', 'autobusas', 'lektuvas', 'traukinis', 'dviratis'];
console.log(sarasas23[0]);
console.log(sarasas23[1]);
console.log(sarasas23[2]);
console.log(sarasas23[3]);
console.log(sarasas23[4]);

// veiksmai su kintamaisiais
//1
const sum = a + b + c;
console.log(sum);

//2
const visasTekstas = `${tekstas1} ${tekstas2} ${tekstas3}`;
const visasTekstas2 = tekstas1 + " " + tekstas2 + ' ' + tekstas3;
console.log(visasTekstas);
console.log(visasTekstas2);

//3 
const verte1 = sarasas11[0] - sarasas11[1] + sarasas11[2] - sarasas11[3] + sarasas11[4];
console.log(verte1);

const verte12 = sarasas12[0] - sarasas12[1] + sarasas12[2] - sarasas12[3] + sarasas12[4];
console.log(verte12);

const verte13 = sarasas12[0] - sarasas12[1] + sarasas12[2] - sarasas12[3] + sarasas12[4];
console.log(verte13);



//4

const verte21 = sarasas21[0] + ', ' + sarasas21[1] + ', ' + sarasas21[2] + ', ' + sarasas21[3] + ', ' + sarasas21[4];
console.log(verte21);
const verte22 = sarasas22[0] + ', ' + sarasas22[1] + ', ' + sarasas22[2] + ', ' + sarasas22[3] + ', ' + sarasas22[4];
console.log(verte22);





//Kintamuju palyginimas

//1
const kint1 = 5;
const kint2 = 8;

if (kint1 > kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (kint1 < kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (kint1 === kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (kint1 !== kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (kint1 <= kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (kint1 >= kint2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//2
const ilgis1 = 'mandarinas'
const ilgis2 = 'duona'

console.log(ilgis1.length);
console.log(ilgis2.length);

//3
if (ilgis1.length > ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (ilgis1.length < ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (ilgis1.length === ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (ilgis1.length !== ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (ilgis1.length >= ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (ilgis1.length <= ilgis2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//4

const sTipas1 = 