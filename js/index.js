async function fetchOriginalArray() {
  const response = await fetch('/api/original-array');
  const data = await response.json();
  return data.array;
}

function createTable(array) {
  const table = document.createElement('table');
  table.className = 'table-auto border-collapse border border-gray-400 w-full max-w-xl mx-auto';

  for (let row = 0; row < 8; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 10; col++) {
      const td = document.createElement('td');
      td.className = 'border border-gray-300 px-3 py-1 text-center';
      td.textContent = array[row * 10 + col];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('array-container');
  const array = await fetchOriginalArray();
  const table = createTable(array);
  container.appendChild(table);

  const button = document.getElementById('show-sorted');
  button.addEventListener('click', () => {
    window.location.href = '/sorted';
  });
});
