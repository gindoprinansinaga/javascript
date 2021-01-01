// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter
// Mencari angka >= 3
// for
// const newAngka = [];
// for( let i=0; i < angka.length; i++){
//     if( angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// const newAngka = angka.filter(e => e >= 3);
// console.log(newAngka);

// Map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a=> a*2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
// const hasil = angka.filter(a => a > 5) // 8,9,9
//                    .map(a => a * 3) // 24, 27,27
//                    .reduce((acc, cur) => acc + cur); // 78
// console.log(hasil);

// 1. ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// 2. pilih hanya yang 'JAVASCRIPT LANJUTSN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// 3. ambil dursasi masing2 video
 .map(item => item.dataset.duration)

// 4. ubah durasi menjadi float, ubah menit menjadi detik
 .map(waktu => {
    // 10:30 --> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
 })

// 5. Jumlahkan semua detik
 .reduce((total, detik) => total + detik);

// 6. ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

// console.log(jmlVideo);
var b = '';
for( var i = 5; i > 0; i--){
   for( var j = 0; j < i; j++){
      b += '*';
   }
   b += '\n';
}
console.log(b);