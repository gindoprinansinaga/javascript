// 2.1 EXECUTIN CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'gindo';

// creation phase pada global conext
// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// var nama = 'Gindo';
// var umur = 28;

// console.log(sayHello());

// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution context
// window
// arguments
// hoisting


// var nama = 'Prinando';
// var username = '@gindoprinando';

// function cetakURL(username){
//     var instagramURL = `http://instagram.com/`;
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a(){
//     console.log(`ini a`);
//     function b(){
//         console.log(`ini b`);
//         function c(){
//             console.log(`ini c`);
//         }
//         c();
//     }
//     b();
// }
// a();

// function satu(){
//     var nama = 'Gindo';
//     console.log(nama);
// }

// function dua(){
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);

// function init(){
//     let nama = 'Gindo';
//     function tampilNama(){
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Gindo');

// const tampilNama = function (nama){
//     return 'Halo, ${$nama}';
// }

// console.log(tampilNama('Gindo'));

// const tampilNama = (nama) => { return `Halo, ${nama}`;}
// console.log(tampilNama(`Gindo Prinando Sinaga`));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Gindo', `Sore`));

// Implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama(`Gindo Prinando Sinaga`));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ['Gindo', 'prinando', 'sinaga'];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// konsep this pada arrow function

// constructur function
// const Mahasiswa = function(){
//     this.nama = 'Gindo';
//     this.umur = 29;
//     this.sayHello = function(){
//         console.log(`Halo saya ${this.nama}, umur saya ${this. umur} tahun.`);
//     }
// }

// const gindo = new Mahasiswa();

// const Mahasiswa = function(){
//     this.nama = 'Gindo';
//     this.umur = 29;
//     this.sayHello = function () {
//         console.log(`Halo saya ${this.nama}, umur saya ${this. umur} tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000);
// }

// const gindo = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});