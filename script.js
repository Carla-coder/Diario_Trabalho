document.addEventListener("DOMContentLoaded", () => {
  loadRecords();
  checkCompanyAndSalary();
});

document.getElementById("work-form").addEventListener("submit", addRecord);
document
  .getElementById("save-company-salary-btn")
  .addEventListener("click", saveCompanyAndSalary);

function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function saveCompanyAndSalary() {
  const companyName = document.getElementById("company-name").value;
  const salary = document.getElementById("salary-input").value;

  if (!companyName || !salary)
    return alert("Preencha o nome da empresa e o salário.");

  // Recupera os dados da empresa existentes no localStorage
  let companyData = JSON.parse(localStorage.getItem("companyData"));

  if (companyData) {
    // Atualiza o salário caso a empresa já tenha sido registrada
    companyData.salary = salary;
    alert("Salário atualizado com sucesso!");
  } else {
    // Registra a empresa e o salário pela primeira vez
    companyData = { companyName, salary };
    alert("Empresa e Salário registrados com sucesso!");
  }

  // Salva novamente os dados da empresa no localStorage
  localStorage.setItem("companyData", JSON.stringify(companyData));

  // Preenche os campos com os dados registrados e habilita o botão de salvar
  document.getElementById("company-name").value = companyName;
  document.getElementById("salary-input").value = salary;

  // Habilita o botão de salvar após o registro ou atualização
  document.getElementById("save-company-salary-btn").disabled = false; // Reabilita o botão
}

// Função para adicionar um registro de trabalho
function addRecord(e) {
  e.preventDefault();
  const date = document.getElementById("start-date").value;
  const entry = document.getElementById("entry-time").value;
  const exit = document.getElementById("exit-time").value;

  if (!date || !entry || !exit) return;

  const companyData = JSON.parse(localStorage.getItem("companyData"));
  if (!companyData)
    return alert("Por favor, registre a empresa e o salário primeiro.");

  const { companyName, salary } = companyData;

  // Extrair o mês e o ano da data
  const [year, month] = date.split("-");
  const monthYear = `${month}-${year}`;

  // Criar o registro
  const record = { date, entry, exit, companyName, salary };

  // Recupera os registros do mês
  let monthlyRecords = JSON.parse(localStorage.getItem(monthYear)) || [];
  monthlyRecords.push(record);

  // Salva os registros de volta no localStorage, com a chave sendo o mês e ano
  localStorage.setItem(monthYear, JSON.stringify(monthlyRecords));

  loadRecords();
  document.getElementById("work-form").reset();
}

// Função para carregar os registros
function loadRecords() {
  const recordsTable = document.getElementById("records-table");
  recordsTable.innerHTML = "";

  // Carregar todos os registros de meses armazenados no localStorage
  const allRecords = Object.keys(localStorage)
    .filter((key) => key.includes("-"))
    .sort();

  allRecords.forEach((monthYear) => {
    let records = JSON.parse(localStorage.getItem(monthYear));
    let monthHeader = document.createElement("tr");
    monthHeader.innerHTML = `<td colspan="4"><strong>Registros de ${monthYear}</strong></td>`;
    recordsTable.appendChild(monthHeader);

    records.forEach((record, index) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                            <td>${formatDate(record.date)}</td>
                            <td>${record.entry}</td>
                            <td>${record.exit}</td>
                            <td>
                                <button onclick="editRecord(${index}, '${monthYear}')">✏️</button>
                                <button onclick="deleteRecord(${index}, '${monthYear}')">🗑️</button>
                            </td>
                        `;
      recordsTable.appendChild(row);
    });
  });
}

// Função para excluir um registro
function deleteRecord(index, monthYear) {
  let records = JSON.parse(localStorage.getItem(monthYear));
  records.splice(index, 1);
  localStorage.setItem(monthYear, JSON.stringify(records));
  loadRecords();
}
// Função para editar um registro
function editRecord(index, monthYear) {
  let records = JSON.parse(localStorage.getItem(monthYear));
  let record = records[index];
  document.getElementById("start-date").value = record.date;
  document.getElementById("entry-time").value = record.entry;
  document.getElementById("exit-time").value = record.exit;
  records.splice(index, 1);
  localStorage.setItem(monthYear, JSON.stringify(records));
  loadRecords();
}

// Verifica se a empresa e o salário já estão registrados, caso contrário, exibe os campos
function checkCompanyAndSalary() {
  const companyData = JSON.parse(localStorage.getItem("companyData"));
  if (companyData) {
    // Preenche os campos do formulário com os dados registrados
    document.getElementById("company-name").value = companyData.companyName;
    document.getElementById("salary-input").value = companyData.salary;

    // Desabilitar o botão de salvar, pois os dados já foram registrados
    document.getElementById("save-company-salary-btn").disabled = false; //habiltar o botão de salvar
  }
}
