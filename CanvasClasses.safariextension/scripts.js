function displaylinks() {
    var links = [];
    links[0]="OS";
    links[1]="Data Management";
    links[2]="Stat";
    links[3]="LAS";

    var URLs = [];
    URLs[0]="https://utexas.instructure.com/courses/1144197";
    URLs[1]="https://utexas.instructure.com/courses/1144118";
    URLs[2]="https://utexas.instructure.com/courses/1154537";
    URLs[3]="https://utexas.instructure.com/courses/1147037";

     for (var i = 0; i < links.length; i++) {
         document.getElementById('links').innerHTML += (links[i].link(URLs[i]) + "<br>");
     }

    for (var i = 0; i < localStorage.length; i++) {
        document.getElementById('links').innerHTML += localStorage.key(i).link(localStorage.getItem(localStorage.key(i)));

        //document.getElementById('links').innerHTML +=("<div>");
        document.getElementById('links').innerHTML += "<button id='delete' onclick='deleteClass(localStorage.key(" + i + "))'>X</button>" + "<br>";
        //document.getElementById('links').innerHTML +=("</div>");

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

//function test() {
//    console.log("hello");
//    var gw = safari.extension.globalPage.contentWindow;
//    gw.postMessage("message", window.location.origin);
//}


//function init() {
//    if (window.localStorage && !localStorage.getItem("classes")) {
//        var classes = [];
//        var string = JSON.stringify(classes);
//        localStorage.setItem('classes', string);
//    }
//}