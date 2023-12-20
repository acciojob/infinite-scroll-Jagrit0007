//your code here!

const list = document.getElementById('infi-list');

// Function to add new list items
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'List Item ' + (list.childElementCount + 1);
    list.appendChild(newItem);
  }
}

// Event listener for scroll
list.addEventListener('scroll', function() {
  // Calculate the distance from the bottom of the list
  const distanceFromBottom = list.scrollHeight - list.scrollTop - list.clientHeight;

  // If the user has scrolled to the bottom (with some margin)
  if (distanceFromBottom < 50) {
    // Add more items
    addMoreItems();
  }
});

// Initially add 10 list items
for (let i = 1; i <= 10; i++) {
  const newItem = document.createElement('li');
  newItem.textContent = 'List Item ' + i;
  list.appendChild(newItem);
}