function displaylinks() {
    var links = new Array();
    links[0]="OS";
    links[1]="Data Management";
    links[2]="Stat";
    links[3]="LAS";

    var URLs = new Array();
    URLs[0]="https://utexas.instructure.com/courses/1144197";
    URLs[1]="https://utexas.instructure.com/courses/1144118";
    URLs[2]="https://utexas.instructure.com/courses/1154537";
    URLs[3]="https://utexas.instructure.com/courses/1147037";

     for (var i = 0; i < links.length; i++) {
         document.getElementById('links').innerHTML += (links[i].link(URLs[i]) + "<br>");
     }
}



function loadClasses(){
    //var classList = document.getElementsByClassName("customListItem");
    //var lis = document.getElementById("menu-item-drop-column-list").getElementsByTagName("customListItem");

        //document.write(lis[0].href);
    safari.write("cry");


}

function addClasses(name, link){

}