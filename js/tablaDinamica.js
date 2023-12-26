function cargarTablaDesdeJSON(url, tablaId) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tablaBody = document.getElementById(tablaId).getElementsByTagName('tbody')[0];
  
        data.forEach(item => {
          const row = tablaBody.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
  
          cell1.textContent = item.terapia;
          cell2.textContent = item.precio;
          cell3.textContent = item.duracion;
        });
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  