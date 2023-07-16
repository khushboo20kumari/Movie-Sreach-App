var request = new XMLHttpRequest();
let box=document.getElementById("box");
let button=document.getElementById("button");
function clickButton() {
      var sreach_movise = document.getElementById("sreach").value.split(' ').join('+');
      request.addEventListener('load',getData);
      request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+sreach_movise);
      request.send();
}
function getData() {
    var data = JSON.parse(request.responseText);
    showdata(data.results)  
    
}
function showdata(data){
    data.forEach((item)=>{
       box.innerHTML=`
       <p><b>Name of Name:-</b>${item.title}</p>
       <p><b>original_title:-</b>${item.original_title}</p>
       <p><b>release_date:-</b>${item.release_date}</p>
       <p><b>overview:-</b>${item.overview}</p>
       <p><b>vote_average:-</b>${item.vote_average}</p>
       <p><b>original_language:-</b>${item.original_language}</p>
     `
   })
   
}

button.addEventListener("click",clickButton);

