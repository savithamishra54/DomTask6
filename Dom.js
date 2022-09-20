var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var Seconditem = document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.color = 'green';
var Thirditem = document.querySelector('.list-group-item:nth-child(3)');
Thirditem.style.display='none';



//querySelectorAll//

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ='green';
}






