document.addEventListener('DOMContentLoaded', () => {
  const itemList = document.getElementById('itemList');
  const addItemBtn = document.getElementById('addItemBtn');
  const myForm = document.getElementById('myForm');
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];

  // Load items from localStorage
  const loadItems = () => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => addItemToList(item));
  };

  const addItemToList = (item) => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  };

  const addItem = () => {
    const item = prompt('Enter a new item:');
    if (item) {
      addItemToList(item);
      saveItem(item);
    }
  };

  const saveItem = (item) => {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  };

  addItemBtn.addEventListener('click', addItem);
  loadItems();

  // Form handling
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    alert(`Name: ${name}\nEmail: ${email}`);
    myForm.reset();
  });

  // Modal handling
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
