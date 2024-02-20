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


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("response-box");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}





/*function exportHTML() {
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML = header + document.getElementById("ai-box").innerHTML + footer;
 
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'document.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}*/




function Export2Word(element, filename = '') {
  //var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  //var postHtml = "</body></html>";
  var html = document.getElementById(element);

  //var blob = new Blob(['\ufeff', html], {
  //  type: 'application/msword'
  //});

  var text = html.value;
  var format = formatTextForward(text);

  let name = prompt("Please enter a file name to save:");
  if (name == null || name == "") {
    filename = 'document'
  }

  else {
    filename = name ? name + '.doc' : 'document.doc';
  }

  // Specify link url
  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(format);


  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);

  html.value = '';
  localStorage.clear();
}


function formatTextForward(text) {
  var format = text.replace(/\n/g, '\r\n');
  return format;
}






/*window.onload = function(){
   var copy = localStorage.getItem('myCopy');

   var output = document.getElementById('ai-box');
   output.innerText = copy;
}*/

/*window.onload = function () {
 var url = document.location.href,
     params = url.split('?')[1].split('&'),
     data = {}, tmp;
 for (var i = 0, l = params.length; i < l; i++) {
      tmp = params[i].split('=');
      data[tmp[0]] = tmp[1];
 }
 document.getElementById('here').innerHTML = data.name;
}*/

// Retrieve the stored texts from local storage and display them
/*const existingTexts = JSON.parse(localStorage.getItem('exportedTexts')) || [];
const displayArea = document.getElementById('ai-box');

for (const text of existingTexts) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    displayArea.appendChild(paragraph);
}*/