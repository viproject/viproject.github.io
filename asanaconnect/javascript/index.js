
window.onload = function() {
    
    document.getElementById('date').innerHTML = new Date().toDateString();
    
    var node;
    if(true) {
        node = document.getElementById('if-part');
    }
    else {
        node = document.getElementById('else-part');
    }
    node.style.visibility = 'visible';
}


