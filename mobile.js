function MenuClick(index, object){
    content = document.getElementById("main-content");
    parent = content.parentNode;
    parent.childNodes.forEach(node => {
        node.style = "opacity: 0; height:0vh;";
    });
    object.style = "";
    parent.insertBefore(content, object);
    setTimeout(()=>{
        content.style = "height:70vh; opacity:1;";
    },10);
}
function CloseMainContent(){
    parent.childNodes.forEach(node => {
        node.style = "";
    });
    document.getElementById("main-content").style = "height:0vh;";
}