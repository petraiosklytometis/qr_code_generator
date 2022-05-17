const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault;
// http(s)://api.qrserver.com/v1/create-qr-code
btnValue.addEventListener('click', () => {
  let qrcodeValue = inputValue.value.trim();
  if(!qrcodeValue || qrcodeValue === valueDefault) return;
  valueDefault = qrcodeValue;
  btnValue.innerText = 'Gerando QR Code...'
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=330066&format=svg&data=${valueDefault}`;
  imgQrCode.addEventListener('load', () => {
    wrapper.classList.add('active');
    btnValue.innerText = 'Gerar QRCode'
  })
})