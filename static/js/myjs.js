function proceed() {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '/');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}

function GetImage()
{
    document.getElementById("ShowOutput").innerHTML="<div id=\"output\" class=\"callout\"><h2>Here is your word association cloud:</h2></div><div><img src=\"/static/images/placeholder.jpg\">"
}