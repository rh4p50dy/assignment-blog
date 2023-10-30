const getReady = ()=>{
    localStorage.getItem('edit') ? edit() : goBack() 
}


const edit = ()=>{
    postID = localStorage.getItem('edit');
    localStorage.removeItem('edit')
    data = fetch(`http://localhost:3000/posts/${postID}`)
    data.then(data => data.json()).then(data => {
        send = (title,body)=>{
            try{
                fetch(`http://localhost:3000/posts/${postID}`,{
                    method : "PATCH",
                    cache: "no-cache",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({ title, content: body }),
                }).then(a => goBack())
                
                
            }catch(error){
                console.log(error)
            }
        }
        
        document.getElementById("title").value = data.title
        document.getElementById("content").value = data.content
        document.getElementById("btn").addEventListener("click", ()=>{
            title = document.getElementById("title").value
            content = document.getElementById("content").value
            send(title,content)
        })

    })
    
}

const goBack = ()=>{
    location.href = "http://localhost:8000/"
}
getReady();
