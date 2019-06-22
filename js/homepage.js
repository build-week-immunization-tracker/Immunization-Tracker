const creditButton = document.getElementById('selectPLEASE')

const creditShow = document.querySelector('.credit')

creditButton.addEventListener('click', () => {
    creditShow.classList.toggle('credit');
    if(creditButton.textContent == 'Credit'){
    creditButton.textContent = 'Close'
    } else {
    creditButton.textContent = 'Credit'
    }
})