// Cara untuk membuat Object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Gindo',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }
// let mahasiswa2 = {
//     nama: 'Prinando',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let gindo = Mahasiswa('gindo', 10);
// let prinando = Mahasiswa('prinando', 20);

// 3. Constructur Function
// keyword new

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

}
let Gindo = new Mahasiswa('Gindo', 10);
