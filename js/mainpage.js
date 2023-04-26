fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {

    const table = document.getElementById('users');

    const tableBody = table.getElementsByTagName('tbody')[0];
    const tableHeader = table.createTHead();
    const tableRow = tableHeader.insertRow();
    const idHeader = tableRow.insertCell();
    const titleHeader = tableRow.insertCell();
    const completionHeader = tableRow.insertCell();

    idHeader.innerHTML = "<b>Id</b>";
    titleHeader.innerHTML = "<b>Title</b>";
    completionHeader.innerHTML = "<b>Completion status</b>";

    let numCompleted = 0;
    let numPopups = 0;

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
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          numCompleted++;
          if (numCompleted % 5 === 0 && numCompleted > numPopups * 5) {
            alert('Congrats! ' + numCompleted + ' tasks have been succesfully completed!!');
            numPopups++;
          }
        } else {
          numCompleted--;
        }
      });
    });

  })
  .catch(error => console.error(error));
