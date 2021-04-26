// select modal-btn, modal-overlay,close-nbtn
// listen for clicks events on modal-btn and close0btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    modal.classList.add('open-modal');
});

close.addEventListener('click', function(){
    modal.classList.remove("open-modal")
});
