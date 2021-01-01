// 1. HTML Fragments
// const cst = {
//     nama : 'Gindo Prinando',
//     umur : 29,
//     nip : '123456',
//     email : 'student.sinaga@gmail.com'
// };

// const el =  `<div class="cst">
// <h2>${cst.nama}</h2>
// <span class="nip">${cst.nip}</span>
// </div>`

// 2. Looping
// const cst = [
//     {
//         nama : "Gindo Prinando",
//         email : "student.sinaga@gmail.com"
//     },
//     {
//         nama : "Sinaga",
//         email : "code@gmail.com"
//     },
//     {
//         nama : "Reverse",
//         email : "reverse@gmail.com"
//     },

// ];

// const el = `<div class="cst">
//     ${cst.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditionals
// ternary
// const lagu = {
//     judul : "Tetap Dalam Jiwa",
//     penyanyi : 'Isyana Sarasvati',
//     // feat : 'Rayi Putra'
// }
// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`

// 4. Nested
// HTML Fragment bersarang
const mhs = {
    nama : 'Gindo Prinando',
    semester : 1,
    mataKuliah : [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interactive',
        'Perancangan Sistem berorientasi Objek',
        'javascript'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div>
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;