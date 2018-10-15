function funcPhoto(list){
   
    var photos= document.getElementById('photos');

  for(i=0;i<=list.length;i++){
     console.log(list[i].url);
    const image= document.createElement('img',);
    image.setAttribute('src',list[i].url+'.jpg');
    image.setAttribute('height','100px');
    image.setAttribute('width','200px');
    photos.appendChild(image);
  }
}

function htmlRequest(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/albums/1/photos',true);
    //deschide comunicarea cu serverul
    xhr.setRequestHeader('Content-Type','application/json; charset=UTF-8');
    xhr.onload=function(){
        var response=JSON.parse(xhr.responseText);
        //convertim ca obiect
        console.table(response);
        funcPhoto(response);

    };
    xhr.send(null);
}

window.onload=function(){
    htmlRequest();
}

//onload 
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest