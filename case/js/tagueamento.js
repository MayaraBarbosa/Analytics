// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
document.getElementById('nome').addEventListener('change', function () {
    ga('send', 'event', { 'eventCategory': 'contato', 'eventAction': 'nome', 'eventLabel': 'preencheu' });
});

document.getElementById('email').addEventListener('change', function () {
    ga('send', 'event', { 'eventCategory': 'contato', 'eventAction': 'email', 'eventLabel': 'preencheu' });
});
document.getElementById('telefone').addEventListener('change', function () {
    ga('send', 'event', { 'eventCategory': 'contato', 'eventAction': 'telefone', 'eventLabel': 'preencheu' });
});
document.getElementById('aceito').addEventListener('input', function () {
    ga('send', 'event', { 'eventCategory': 'contato', 'eventAction': 'aceito', 'eventLabel': 'preencheu' });
});