document.getElementById("addBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let roll = document.getElementById("roll").value.trim();
  let dept = document.getElementById("dept").value.trim();

  const namePattern = /^[A-Za-z ]+$/;
  const rollPattern = /^\d+$/;

  if (name === "" || roll === "" || dept === "") {
    alert("Please fill all fields before adding a student.");
    return;
  }

  if (!namePattern.test(name)) {
    alert("Name must contain only letters. No numbers allowed.");
    return;
  }

  if (!rollPattern.test(roll)) {
    alert("Roll must contain only digits. Letters are not allowed.");
    return;
  }

  let tableBody = document.querySelector("#studentTable tbody");

  let tr = document.createElement("tr");

  tr.innerHTML = `
        <td><strong>${name}</strong></td>
        <td><strong>${roll}</strong></td>
        <td><strong>${dept}</strong></td>
        <td><button class="delete-btn">Delete</button></td>
    `;

  tableBody.appendChild(tr);

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("dept").value = "";

  tr.querySelector(".delete-btn").addEventListener("click", function () {
    tr.remove();
  });
});