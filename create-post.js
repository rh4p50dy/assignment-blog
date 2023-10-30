const send = (title,img,body)=>{
    try{
        time = new Date();
        fetch(`http://localhost:3000/posts`,{
            method : "POST",
            cache: "no-cache",
            headers : {
                "Content-Type" : "application/json"
                },
            body : JSON.stringify({ title,img_url: img, content: body,created_at: time.toISOString() , created_by: localStorage.getItem('user')}),
        })
                
                
    }catch(error){
        console.log(error)
    }
}

if(localStorage.getItem('user')){
    document.getElementById("btn").addEventListener("click", ()=>{
        title = document.getElementById("title").value
        content = document.getElementById("content").value
        img = document.getElementById("img").value
        send(title,img,content)
    })
}else{
    location.href = 'index.html'
}
