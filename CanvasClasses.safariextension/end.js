safari.self.addEventListener("message", handleMessage, false);

function scanPage() {
    var classes = document.getElementsByClassName('customListItem');
    var names = [];
    var links = [];

    for (var i = 0; i < classes.length; i++) {
        names.push(classes[i].childNodes[1].childNodes[1].innerHTML);
    }

    safari.self.tab.dispatchMessage('done', names);

}

function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    if (messageName === "startScan") {
        scanPage();
    }
}

