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

        var x = document.getElementById("x").value; 
        var y = document.getElementById("y").value; 
        var z = document.getElementById("z").value; 
        var data={'x':x, 'y':y,"z":z};
        var xhr = new XMLHttpRequest();
        console.log("sending: ");
        console.log(data);
        xhr.open("post", "/", true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
        xhr.send(JSON.stringify(data));

        xhr.onloadend = function () {
 
            document.getElementById("search_result_label").innerText="Select a song from below";
            var response=JSON.parse(xhr.response);
            response["result"].forEach(record => {
                var content='<option value="'+record+'">'+record+"</option>";

               // var opt=document.createElement("option");
               // opt.setAttribute("value",record);
               // opt.innerText=record;
                document.getElementById("search_results_dropdown").innerHTML+=content;
            })
        }

    
}