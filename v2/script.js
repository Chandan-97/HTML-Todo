function add(params) {
    var val = document.getElementById("additembox").value;
    if(val.length == 0){
        return;
    }

    var element = createElement(val);
    
    document.getElementById("listitem").appendChild(element.toDOM());
}

function createElement(val){
    var element = "<div class='todoitem'><div class='item'>"+val+"</div><div class='edit'>Edit</div><div class='delete'>Delete</div></div>";
    return element;
}

String.prototype.toDOM=function(){
    var d=document
       ,i
       ,a=d.createElement("div")
       ,b=d.createDocumentFragment();
    a.innerHTML=this;
    while(i=a.firstChild)b.appendChild(i);
    return b;
};


