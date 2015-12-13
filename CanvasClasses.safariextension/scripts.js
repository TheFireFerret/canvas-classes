function displaylinks() {
    for (var i = 0; i < localStorage.length; i++) {
        document.getElementById('links').innerHTML +=("<p>");
        document.getElementById('links').innerHTML += localStorage.key(i).link(localStorage.getItem(localStorage.key(i)));
        document.getElementById('links').innerHTML += "<button id='delete' style='float: right;' onclick='deleteClass(localStorage.key(" + i + "))'>X</button>" ;
        document.getElementById('links').innerHTML +=("</p>");
    }
}

function dispatchScanMessage(name, message) {
    if (safari.self.tab) {
        safari.self.tab.dispatchMessage(name, message);
    } else if (safari.extension.globalPage.contentWindow) {
        safari.extension.globalPage.contentWindow.scanPage({name: name, message: message});
    }
}

function addClasses() {
    var name = document.getElementById('class_input');
    var link = document.getElementById('link_input');

    localStorage.setItem(name.value, link.value);

    document.getElementById('classInput').style.visibility = "hidden";

    location.reload();
}

function showAddMore() {
    document.getElementById('classInput').style.visibility = "visible";
    document.getElementById('add').style.visibility = "visible";
}


function deleteClass(name) {
    console.log("REMOVING" + name);
    localStorage.removeItem(name);

    location.reload();
}
