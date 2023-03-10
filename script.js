const url = "http://imiki.pl/cf/";
const tableBody = document.querySelector("#dane tbody");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.timeStamp}</td>
        <td>${row.chanel}</td>
        <td>${row.servername}</td>
        <td>${row.ver}</td>
        <td>${row.data}</td>
      `;
      tableBody.appendChild(tr);
    });
  })
  .catch((error) => console.error(error));
