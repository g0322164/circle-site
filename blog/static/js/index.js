var nameElement = document.getElementById("username");
var emailElement = document.getElementById("useremail");
var feedbackElement = document.getElementById("feedback");
function processFormData() {
    const name = nameElement.value;
    const email = emailElement.value;
    alert("謝謝" + name + "的回饋，我們將再用email:" + email + "與您聯繫!");
}
function addMsg() {
    // get table tag element
    let table = document.getElementById("Feedback_table");
    // build new row
    let newRow = table.insertRow();
    // build three new unit, place the element in table
    newRow.insertCell().innerHTML = new Date().toLocaleString();
    newRow.insertCell().innerHTML = nameElement.value;
    newRow.insertCell().innerHTML = emailElement.value;
    newRow.insertCell().innerHTML = feedbackElement.value;
    newRow.insertCell().innerHTML = '<input type="button" value="Delete" onclick="delRow(this)"></input>'
    nameElement.value = '';
    emailElement.value = '';
    feedbackElement.value = '';
}
function delRow(r) {
    // 指定i=r(this)的父層+父層
    var i = r.parentNode.parentNode.rowIndex;
    // delete
    document.getElementById("Feedback_table").deleteRow(i);
    alert("ありがとうございます。情報を削除しました！");
}