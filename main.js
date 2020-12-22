'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click' , () => {
const num = Math.random();

if (num < 0.2) {
    result.textContent = 'クシャミが一生止まらないでしょう';
} else if (num < 0.5) {
    result.textContent = '耳たぶが切れるでしょう';
} else if (num < 0.8) {
    result.textContent = '便秘になるでしょう'; 
} else {
    result.textContent = '犬のふんを踏みます';
}

});
