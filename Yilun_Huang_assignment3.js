/* Question 1 */
const tableHeaders = ["Name", "Age", "Phone #", "Address"];
const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];
// Why can't use getelementbyid here?
const infoDiv = document.getElementById("info"); // getElementById("id")
const createTable = () => {
  let infoTable = document.createElement("table");
  infoTable.className = "tableClass";

  let infoTableHead = document.createElement("thead");
  infoTableHead.className = "tableHeadClass";

  let infoTableHeaderRow = document.createElement("tr");
  infoTableHeaderRow.className = "tableHeaderRowClass";

  tableHeaders.forEach((header) => {
    let infoTableHeaderCell = document.createElement("th");
    infoTableHeaderCell.textContent = header;
    infoTableHeaderRow.append(infoTableHeaderCell);
  });
  infoTableHead.append(infoTableHeaderRow);
  infoTable.append(infoTableHead);

  let infoTableBody = document.createElement("tbody");
  infoTableBody.className = "tableBodyClass";
  infoTable.append(infoTableBody);

  infoDiv.append(infoTable);
};

const addRow = (tableInfo) => {
  const infoTableBody = document.querySelector(".tableBodyClass");
  tableInfo.forEach((studentInfo) => {
    let infoTableBodyRow = document.createElement("tr");
    infoTableBodyRow.className = "tableBodyRowClass";
    let name = document.createElement("td");
    name.textContent = studentInfo.studentName;
    let age = document.createElement("td");
    age.textContent = studentInfo.Age;
    let phoneNum = document.createElement("td");
    phoneNum.textContent = studentInfo.Phone;
    let address = document.createElement("td");
    address.textContent = studentInfo.Address;
    infoTableBodyRow.append(name, age, phoneNum, address);
    infoTableBody.append(infoTableBodyRow);
  });
};
createTable();
addRow(tableInfo);

/* Question 2 */
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const listsDiv = document.querySelector("#lists");
let orderedListHead = document.createElement("h2");
orderedListHead.className = "listHead";
orderedListHead.textContent = "An ordered technologies list";
let orderedList = document.createElement("ol");
orderedList.className = "orderedList";
list.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.textContent = item;
  orderedList.append(listItem);
});

let unorderedListHead = document.createElement("h2");
unorderedListHead.className = "listHead";
unorderedListHead.textContent = "An unordered technologies list";
let unorderedList = document.createElement("ul");
unorderedList.className = "unorderedList";
list.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.textContent = item;
  unorderedList.append(listItem);
});
listsDiv.append(orderedListHead, orderedList, unorderedListHead, unorderedList);

/* Question 3 */
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const dropdownDiv = document.querySelector("#dropdown");
const selector = document.createElement("select");
selector.className = "selector";
dropDownList.forEach(({ value, content }) => {
  let dropdownOption = document.createElement("option");
  dropdownOption.className = "option";
  dropdownOption.value = value;
  dropdownOption.textContent = content;
  selector.append(dropdownOption);
});
dropdownDiv.append(selector);
