function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


function showfield(name) {
  if (name == 'other') document.getElementById('div1').innerHTML = '<input type="text" name="other" />';
  else
    document.getElementById('div1').innerHTML = '';
}

/* function showfield(name){
   if(name=='Other')document.getElementById('div2').innerHTML = '<input type="text" name="other" />';
   else 
     document.getElementById('div2').innerHTML='';
 }*/

let promptsStore = [];


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("response-box");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function erase() {
  const textarea = document.getElementById("response-box");

  // clears the text
  textarea.value = '';
}

async function getData() {
  const rawPrompt = document.getElementById('text-box').value;
  const industry = document.getElementById('sectors').value
  const role = document.getElementById('roles').value
  const context = document.getElementById('edit-box').value;
  console.log(rawPrompt, industry, role);
  const res = await fetch('http://localhost:3000/generate', {

    body: JSON.stringify({ rawPrompt, industry, role, context }),
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST'
  });

  const { prompts } = await res.json();
  console.log(prompts);
  promptsStore = prompts;
  promptsStore = promptsStore.filter(p => p.length > 5)
  let prompt = promptsStore[0] + "\n" + promptsStore[1] + "\n" + promptsStore[2];
  document.getElementById('edit-box').value = prompt;


}

async function prompt(pn) {

  let prompt = promptsStore[pn] + "\n" + promptsStore[pn + 1] + "\n" + promptsStore[pn + 2];
  document.getElementById('edit-box').value = prompt;


}

function handleSubmit() {
  const text = document.getElementById('edit-box').value;
  document.getElementById('response-box').value = text;



}












/*function exportHTML() {
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML = header + document.getElementById("response-box").innerHTML + footer;
 
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'document.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}*/

/*function aid() {
  var input = document.getElementById("response-box");
  var copy = input.value;

  localStorage.setItem('myCopy', copy);
  window.location.href = 'aidoc.html';
}*/

/*function appendEle() {
 let test_div = document.getElementById("edit-box");
    test_div.innerHTML += "<p> digit is " +  " </p>";
}*/

/*function exportTexts() {
 const texts = document.getElementById('response-box').value;
 if (texts.trim() !== '') {
     // Get the existing stored text or initialize an empty array
     const existingText = JSON.parse(localStorage.getItem('exportedTex')) || [];

     // Add the new text to the array
     existingText.push(texts);

     // Save the updated array back to local storage
     localStorage.setItem('exportedTex', JSON.stringify(existingText));

     // Clear the input box for the next entry
     document.getElementById('response-box').value = '';
 }
}*/

