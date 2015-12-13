
//var newElement = document.createElement("p");
//newElement.textContent = "New Element!";
//newElement.style.color = "red";
//document.body.insertBefore(newElement, document.body.firstChild);

safari.self.addEventListener("message", handleMessage, false);


function scanPage() {
    var classes = document.getElementsByClassName('customListItem');
    var names = [];
    var links = [];

    for (var i = 0; i < classes.length; i++) {
        names.push(classes[i].childNodes[1].childNodes[1].innerHTML);
    }

    //for (var i = 0; i < classes.length; i++) {
    //    //document.body.insertBefore(classes[i].childNodes[1].childNodes[1], document.body.firstChild);
    //    //document.body.insertBefore(names[i], document.body.firstChild);
    //}
    //alert(names);
    safari.self.tab.dispatchMessage('done', names);

}

function handleMessage(msgEvent) {
    //var messageName = msgEvent.name;
    //if (messageName === "startScan") {

        scanPage();

    //}
}

