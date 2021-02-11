
window.onload = function() {
    
    document.getElementById('date').innerHTML = new Date().toDateString();
    
    var node;
    const asana_code = getAsanaCode();
    if(asana_code) {
        node = document.getElementById('if-part');
        document.getElementById('code-box').value = asana_code;
    }
    else {
        node = document.getElementById('no-code');
    }
    node.style.visibility = 'visible';
}

function getAsanaCode () {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code_asana = urlParams.get('code');
    return code_asana;
}

function copyCodeToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("code-box");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function openInViProjectApp () {
    window.open('viprojectplus:asanalogin?code=' + getAsanaCode (), '_blank');
}





