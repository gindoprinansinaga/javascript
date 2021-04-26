// var s = '\n';
// var x = 5;
// for (let i = 0; i < x; i++){

//     for (let spasi = x; spasi > i; spasi--) {
//         s += " ";
        
//     }

//     for (let j = 0; j <= i; j++) {
//             s += "*";
//     }
//         s += "\n";
// }
// console.log(s);

// set initial count
let count = 0;

// selec tvalue and butttons
const value =  document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
    //    console.log(styles);
    if (styles.contains('decrease')) {
        count--;
    }else if (styles.contains('increase')) {
        count++
    } else {
        count = 0;
    }
    value.textContent = count;
    });
});