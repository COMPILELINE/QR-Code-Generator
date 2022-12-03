const wrapper = document.querySelector('.wrapper'),
generatBtn = document.querySelector('.form button'),
qrInput = document.querySelector('.form input'),
qrImg = document.querySelector('.qrcode img')

generatBtn.addEventListener('click' , () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generatBtn.textContent = 'Generating QR Code...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load' , () => {
        generatBtn.textContent = 'Generate QR Code';
        wrapper.classList.add('active')
    })
})

qrInput.addEventListener('keyup' ,() => {
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
})