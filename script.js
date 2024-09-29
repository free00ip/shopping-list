const sendInput = document.querySelector('#input');
const itemContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemName = sendInput.value;
        const newItem = document.createElement('li');
        newItem.classList.add('items');
        newItem.textContent = itemName;

        if (itemName != '') {
            itemContainer.append(newItem);
        }

        sendInput.value = '';
    }

    const itemList = document.querySelectorAll('li');
    for (const item of itemList) {
        function crossItem() {
            item.classList.toggle('done');
        }
        item.addEventListener('click', crossItem);
    }

});