// Callback
// Synchrous Callback
// function halo(nama){
//     alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const karyawan = [
//     {
//         "nama": "Gindo Prinando Sinaga",
//         "nik": "123456789",
//         "email": "gindo@gmail.com",
//         "idProjectManajer": 1
//     },
//     {
//         "nama": "John Doe",
//         "nik": "987654321",
//         "email": "john@gmail.com",
//         "idProjectManajer": 2
//     },
//     {
//         "nama": "James bond",
//         "nik": "999999999",
//         "email": "james@gmail.com",
//         "idProjectManajer": 2
//     }
// ];

// console.log('mulai');
// karyawan.forEach(k => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(k.nama)
// });
    
// console.log('selesai');

// Asychronous Callback
// function getDataKaryawan(url, succes, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if( xhr.readyState === 4){
//             if(xhr.status === 200){
//                 succes(xhr.response);
//             } else if( xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send(); 
// }

// console.log('mulai');
// getDataKaryawan('data/karyawan.json', results => {
//     console.log(results);
// }, () =>{

// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json', 
    succes: (hasil) => {
        // console.log(hasil);
        results.forEach(m => console.log(m.nama))
    },
    error: (e) =>{
        console.log(e.responseText);
    }
});
console.log('selesai');