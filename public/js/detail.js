const backBtn = document.querySelector('.back-btn-container')

backBtn.addEventListener("click", ()=> {
    window.history.back(-1);
})