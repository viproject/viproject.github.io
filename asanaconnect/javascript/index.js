
window.onload = function() {
    
    document.getElementById('date').innerHTML = new Date().toDateString();
    
    var node;
    const asana_code = getAsanaCode();
    if(asana_code) {
        node = document.getElementById('if-part');
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





