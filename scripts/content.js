const modelHTML = document.getElementById('3dmodel').innerHTML;
const printHTML = document.getElementById('3dprint').innerHTML;
const webHTML = document.getElementById('web-creation').innerHTML;
const logoHTML = document.getElementById('logo-creation').innerHTML;
const adHTML = document.getElementById('ad-poster').innerHTML;

const modelBtn = document.getElementById('3dmodel-btn');
const printBtn = document.getElementById('3dprint-btn');
const webBtn = document.getElementById('web-btn');
const logoBtn = document.getElementById('logo-btn');
const adBtn = document.getElementById('ad-poster-btn');

const modelBtnLink = document.getElementById('3dmodel-btn-link');
const printBtnLink = document.getElementById('3dprint-btn-link');
const webBtnLink = document.getElementById('web-btn-link');
const logoBtnLink = document.getElementById('logo-btn-link');
const adBtnLink = document.getElementById('ad-poster-btn-link');

const contentContainer = document.getElementById('content-container');

contentContainer.innerHTML = modelHTML

modelBtn.addEventListener('click', ()=> contentContainer.innerHTML = modelHTML);
printBtn.addEventListener('click', ()=> contentContainer.innerHTML = printHTML);
webBtn.addEventListener('click', ()=> contentContainer.innerHTML = webHTML);
logoBtn.addEventListener('click', ()=> contentContainer.innerHTML = logoHTML);
adBtn.addEventListener('click', ()=> contentContainer.innerHTML = adHTML);

modelBtnLink.addEventListener('click', ()=> contentContainer.innerHTML = modelHTML);
printBtnLink.addEventListener('click', ()=> contentContainer.innerHTML = printHTML);
webBtnLink.addEventListener('click', ()=> contentContainer.innerHTML = webHTML);
logoBtnLink.addEventListener('click', ()=> contentContainer.innerHTML = logoHTML);
adBtnLink.addEventListener('click', ()=> contentContainer.innerHTML = adHTML);
