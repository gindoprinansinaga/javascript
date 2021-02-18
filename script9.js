// // Tagged Templates

// const nama = 'Gindo Prinando Sinaga'
// const umur = 28;

// function highlight(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// // console.log(str); 

// document.body.innerHTML = str;

// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Gindo Prinando'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(salam)

// const [salam, satu, dua, nama ] = perkenalan;

// skipping items
// const [salam, , , nama ] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);


// Destructing Object
// const mhs = {
//     nama: 'Gindo Prinando',
//     umur: 28
// }

// // const nama = mhs.nama;
// const { nama, umur } = mhs;
// console.log(umur);

// Assignment tanpa deklarasi object

// ({ nama, umur } = {nama: 'Gindo Prinando',umur: 28});
// console.log(nama);

// Assignment ke variabel baru
// const mhs = {
//     nama: 'Gindo Prinando',
//     umur: 28
// }

// // const nama = mhs.nama;
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//     nama: 'Gindo Prinando',
//     umur: 28,
//     email: 'gindo@gmail.com'
// }

// // const nama = mhs.nama;
// const { nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// // Rest Parameter
// const mhs = {
//     nama: 'Gindo Prinando',
//     umur: 28,
//     email: 'gindo@gmail.com'
// }

// // const nama = mhs.nama;
// const { nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebgai parameter untuk function
// const mhs ={
//     id: 123,
//     nama: 'Gindo Prinando Sinaga',
//     umur: 28,
//     email: 'gindo@gmail.com'
// }

// function getIdMhs({ id }){
//     return id;
// }

// console.log(getIdMhs(mhs));


// Destructuring

// function penjumlahanPerkalian(a, b){
//     return[a + b, a * b];
// }

// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];
// console.log(jumlah);

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada '] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b 
//     }
// }

// const {bagi, kali, kurang, tambah} = kalkulasi(2,3);
// console.log(kurang);

// Destructuring function arguments

const mhs1 = {
    nama: 'Gindo Prinando SInaga',
    umur: 28,
    email: 'student.sinaga@gamil.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs){
//     return `Halo, nama saya ${mhnama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1)); 

function cetakMhs({nama, umur, email, nilai: {tugas, uts,uas }}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));