let url = document.getElementById("url");
let sub = document.getElementById("sub");

sub.onclick = ()=>{
    console.log(`URL:${url.value}`);
    sendURL(url.value);
}

function sendURL(URL){
  window.location.href = `http://localhost:1000/download?URL=${URL}`;
}