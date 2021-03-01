
console.log('mulai');
$.ajax({
    url: 'data/tes.json',
    success: (hasil) => {
        // console.table(hasil);
        hasil.forEach(m => console.log(m.first_name))

    },
    error: (e) =>{
        console.log(e.responseText);
    }
});
console.log('selesai');