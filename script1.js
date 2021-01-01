// DOM selection
// document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'yellow ';
// judul.style.backgroundColor = 'purple';
// judul.innerHTML = 'Gindo Prinando';

// document.getElementsByTagName() -> mengembalikan html collection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'grey';
// }


// DOM Selection
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// document.querySelector() ->element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li3 = document.querySelector('section#b ul li:nth-child(3)');
// li3.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah menggunakan javascript';

// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'maroon';
    
// }

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'yellow';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'blue';

// DOM Manipulation
// buat elemen baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan dalam paragraf
// pBaru.appendChild(teksPBaru);
// simpan p baru di akhir Section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const li5 = document.createElement('li');
// const teksLi5 = document.createTextNode('Item Baru');
// li5.appendChild(teksLi5);
// const ul = document.querySelector('section#b ul');
// const li3 = ul.querySelector('li:nth-child(3)');

// ul.insertBefore(li5, li3);

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');

// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// li5.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

// const p2 = document.querySelector('.p2');
// function ubahWarna(){
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }
// const p3 = document.querySelector('.p3');
// p3.onclick = ubahWarnaP3;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);

//     function disapear(){
//         ul.removeChild(liBaru);
//     }
//     liBaru.onclick = disapear;
// });
