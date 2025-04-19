const form = document.querySelector('form');
const input = document.querySelector('input');
const dolist = document.querySelector('.dolist');
const clearing = document.querySelector('#clear');

let count = 0;

const submitedForm = (e) => {
    e.preventDefault();

    if(count>=10){
      alert('Do not write more than 10');
      return;
    }


    if (!input.value) {
        alert('Please fill in the input');
    } 
    
    
    
    else {
        const list = document.createElement('p');
        list.innerHTML = input.value;
        list.style.color = '#333';
        list.style.position = 'relative';
        list.style.backgroundColor = '#f4f4f4';
        list.style.fontSize = '14px';
        list.style.width = '290px';
        list.style.marginTop = '10px';
        list.style.padding = '7px 20px';
        list.style.borderRadius = '8px';
        list.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        list.style.cursor = 'pointer';

        const button = document.createElement('button');
        button.style.margin = '0';
        button.style.padding = '7px 13px';
        button.style.color = 'white';
        button.style.backgroundColor = '#e66465';
        button.style.fontSize = '14px';
        button.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        button.style.position = 'absolute';
        button.style.right = '0';
        button.style.top = '0';
        button.style.borderRadius = '5px';
        button.style.opacity = '0';
        button.style.transition = 'opacity 0.5s ease';
        list.appendChild(button);

        dolist.appendChild(list);
        count++;

        document.querySelector('#info').innerHTML = `You have <span>${count}</span> pending tasks`;
        input.value = "";

        list.onmouseover = () => {
            button.style.opacity = '1';
        };

        list.onmouseout = () => {
            button.style.opacity = '0';
        };

        button.onclick = () => {
            list.remove();
            count--;
            document.querySelector('#info').innerHTML = `You have <span>${count}</span> pending tasks`;
        }





    }





};

clearing.onclick = () => {
    while (dolist.firstChild) {
        dolist.removeChild(dolist.firstChild);
    }

    count = 0;
    document.querySelector('#info').innerHTML = `You have <span>${count}</span> pending tasks`;
};

form.onsubmit = submitedForm;
