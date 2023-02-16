// Fetch data from API endpoint
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    // Get the existing table element by ID
    const table = document.getElementById('users');

    // Add table headers
    const tableBody = table.getElementsByTagName('tbody')[0];
    const tableHeader = table.createTHead();
    const tableRow = tableHeader.insertRow();
    const idHeader = tableRow.insertCell();
    const titleHeader = tableRow.insertCell();
    const completionHeader = tableRow.insertCell();

    idHeader.innerHTML = "<b>Id</b>";
    titleHeader.innerHTML = "<b>Title</b>";
    completionHeader.innerHTML = "<b>Completion status</b>";

    // Create a row for each todo item and append it to the table
    data.forEach(todo => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      cell1.textContent = todo.id;
      const cell2 = row.insertCell();
      cell2.textContent = todo.title;
      const cell3 = row.insertCell();
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      cell3.appendChild(checkbox);
    });

    // Count the number of checked checkboxes and show an alert if there are at least 5
    const checkTaskCompletion = new Promise((resolve, reject) => {
      let numChecked = 0;
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            numChecked++;
            if (numChecked >= 5) {
              resolve();
            }
          } else {
            numChecked--;
          }
        });
      });
    });

    checkTaskCompletion.then(() => {
      alert('Congrats! 5 tasks have been succesfully completed');
    });
  })
  .catch(error => console.error(error));
