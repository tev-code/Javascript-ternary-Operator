const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '0';

function update(bgColor, textColor) {
html.style.backgroundColor = bgColor;
html.style.color = textColor;
}

select.onchange = function() {
( select.value === 'black' ) ? update('lightblue','pink') : update('pink','lightblue');
if(select.value ==='plain')
update('white');
}