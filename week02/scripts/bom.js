const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');

        li.textContent = input.value.trim();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        deleteButton.setAttribute('aria-label', 'Remove ' + input.value.trim());

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }

    input.focus();
});