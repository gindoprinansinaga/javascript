// for..of
const mhs = ['Gindo', 'Prinando', 'Sinaga'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
    
// }

// mhs.forEach( m => console.log(m));

// for(const m of mhs){
//     console.log(m);
// }

// string
// const nama = 'Prinando';
// for (const n of nama) {
//     console.log(n);
// }

// const obat = ['batuk', 'flu', 'demam'];
// obat.forEach( (m, i) => {
//     console.log(` ${m} adalah obat ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(` ${m} adalah obat ke-${i + 1}`);
// }

// Nodelist
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.innerHTML));
// for (const n of liNama) {
//     console.log(n.textContent);
// }

// Arguments
// function jumlahkanAngka(){
//     // tidak bisa digunakan
//     // return arguments.reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlahm += a)
//     let jumlah = 0;
//     for (const a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
    
//     // console.log(arguments);
// }

// console.log(jumlahkanAngka(1,2,3,4,5));

//For..in
// const pegawai = {
//     nama: 'Gindo',
//     Nip: 123,
//     jabatan: 'software engineer'
// }

// for (const p in pegawai) {
//     console.log(p);
// }