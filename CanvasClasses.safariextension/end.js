safari.self.addEventListener("message", handleMessage, false);

function scanPage() {
    var classes = document.getElementsByClassName('customListItem');
    var names = [];
    var links = [];

    for (var i = 0; i < classes.length; i++) {
        names.push(classes[i].childNodes[1].childNodes[1].innerHTML);
        links.push(classes[i].childNodes[1]);
    }
    //alert(links);
    var nameStr = names.join(',');
    var linkStr = links.join('-');
    var both = nameStr.concat('_');
    both = both.concat(linkStr);
    //alert(both);
    safari.self.tab.dispatchMessage('done', both);


}

function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    if (messageName === "startScan") {
        scanPage();
    }
}

