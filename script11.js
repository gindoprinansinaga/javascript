// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Gindo', 'Prinando', 'Sinaga'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Gindo', 'Prinando', 'Sinaga'];
// const dosen = ['Rica', 'Dhamayanti', 'Sinaga'];

// const result = [...mhs, 'aji', ...dosen];
// // const result = mhs.concat(dosen);
// console.log(result);

// meng copy array
// const obat = ['Paracetamol', 'merit', 'tremadol'];
// // const obat1 = obat;
// const obat1 = [...obat];
// obat1[0] = 'Fajar';
// console.log(obat1);
// console.log(obat);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(huruf);
// nama.innerHTML = huruf;

// Rest Parameter

// function myFunc( ...myArgs ){
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total +=a;
//     // }
//     // return total;

//     return angka.reduce((a,b) => a + b);

// }

// console.log(jumlahkan(1,2,3,4,5));

// array destructuring
// const kelompok1 = ['Gindo', 'Prinando','Sinaga', 'Rica', 'Dhamayanti', 'Luqiyana'];
// // const ketua = kelompok1[0];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object destructuring
// const team = {
//     pm: 'Gindo',
//     frontend1: 'Prinando',
//     frontend2: 'Sinaga',
//     backend: 'Rica',
//     ux: 'Dhamayanti',
//     devOps: 'Luqiyana'
// }

// const {pm, ...myTeam} = team;
// console.table(myTeam);

// Filtering
// function filterBy(type, ...values){
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('boolean', 1, 2, 'Gindo', false, 10, true, 'Prinando'));