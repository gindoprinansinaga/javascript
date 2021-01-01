// var s = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j >= i; j--) {
//         s += '*';
//     }
//     s += '\n';

// }
// console.log(s);


// function jumlahDuaKubus(a,b) {
//     return a * a * a + b * b * b;
// }

// console.log(jumlahDuaKubus(8, 3));

// function tambah() {
//     var hasil=0;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// console.log(tambah(1,2,3));

// var arr = [];
// arr[0] = "gindo";
// arr[1] = "prinando";
// arr[2] = "sinaga";
// Array[6] = "aneh";
// console.log(arr);

// var arr = ["gindo", "prinando", "sinaga"];
// arr[1] = undefined;
// console.log(arr);

// var arr =  ["gindo", "prinando", "sinaga"];
// for( var i=0; i < arr.length;i++){
//     console.log(arr[i]);
    
// }

// method pada array
// 1. join
// var arr = ['gindo','prinando','sinaga'];
// console.log(arr.join(' '));

// // 2. push and pop
// // arr.push('doddy');
// arr.pop();
// console.log(arr.join(' '))

// // 3. unshift and shift
// arr.unshift('tampan');
// arr.shift();
// console.log(arr.join(' '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr.splice(1,2, 'doddy', 'nofa');
// console.log(arr.join(' '));

// 5. slice
// slice(awal,akhir);
// var arr1 = ['gindo', 'prinando', 'sinaga', 'doddy', 'nova'];
// var arr2 = arr1.slice(1,3);
// console.log(arr2.join(' '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['gindo', 'prinando', 'sinaga'];

// angka.forEach(function(e){
//     console.log(e);
// })

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : '+ e);
// })

// // 7. map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' '));

// 8. sort
// var nomor = [3,4,8,5,1,9,12,11,7,10];
// nomor.sort(function(a, b){
//     return a-b;
// });
// console.log(nomor.join(' '));

// 9. filter
// var nomor = [3,4,8,5,1,9,12,11,7,10];
// var nomor2 = nomor.filter(function(e){
//     return e > 5;
// })
// console.log(nomor2.join(' '));

// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang){
//     // jika penumpang kosong
//     if(penumpang.length == 0){
//         // tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         // kembaikan isi array dan keluar dari function 
//         return penumpang;
//     } else {
//         //  telusuri seluruh kursi dari awal
//         for( var i=0; i < penumpang.length; i++){
//             // jika ada kursi kosong
//             if( penumpang[i] == undefined){
//                 // tambah penumpang di kursi tersebut
//                 penumpang[i] = namaPenumpang;
//                 // kembalikan isi array dan keluar dari function 
//                 return penumpang;
//             }
//             // jika nama penumpang sama
//             else if( penumpang[i] == namaPenumpang) {
//                 console.log(namaPenumpang + ' sudah ada di dalam angkot')
//                 return penumpang;
//             }
//             else if(i == penumpang.length -1){
//                 // tambah penumpang diakhir array
//                 penumpang.push(namaPenumpang);
//                 // kembalikan isi array dan keluar dari function 
//                 return penumpang;
//             }
//         }
//     }
// }

// var hapusPenumpang = function(namaPenumpang, penumpang){
//     if( penumpang.length == 0){
//         console.log('angkot masih kosong');
//     }else{
//         for( i=0;i<penumpang.length;i++){
//             if(penumpang[i] == namaPenumpang){
//                 penumpang[i] = undefined;
//                 return penumpang;
//             }else if( i == penumpang.length -1){
//                 console.log(namaPenumpang + ' tidak ada di dalam angkot');
//                 return penumpang;
//             }
//         }
//     }
//     return penumpang;
// }

// membuat objek
// var mhs = {
//     nama : "Gindo Prinando",
//     umur : 28,
//     ips : [3.00, 2.50, 3.20],
//     alamat : {
//         jalan : "Jl. Abc No.123",
//         kota : "Bandung",
//         Provinsi : "Jawa Barat"
//     }
// }

// membuat object
// object literal
// var mhs1 = {
//     nama : "gindo prinando",
//     nrp : '043040023',
//     email : 'student.sinaga@gmail.com',
//     jurusan : 'Teknik Komputer'
// }

// var mhs2 = {
//     nama : "gulan",
//     nrp : '043040023',
//     email : 'fulan@gmail.com',
//     jurusan : 'Teknik Informatika'
// }

// // function declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan){
//     var mhs = { };
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa('jhon', '1234567', 'jhon@gmail.com', 'manajemen bisnis')

// // Constructor
// function Mahasiswa(nama, nrp, email, jurusan){
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan;
// }

// var mhs4 = new Mahasiswa('Eril', '1234567890', 'eril@gmial.com', 'Tata Boga')

// cara buat object
// cara 1 - function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();

// cara 2 - object literal
// var obj = {a : 10, nama: 'gindo'};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructur
// function Halo(){
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan objek yang baru dibuat