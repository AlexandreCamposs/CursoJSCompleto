let a = document.querySelector('footer a');
console.log(a);
console.log(a.getAttribute('href'));

let link = 'https://www.google.com';

a.setAttribute('href', link);
console.log(a.getAttribute('href'))