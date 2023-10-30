const getPost = ()=>{ 
    data = fetch('./inc/data.json')
    data.then(res => {return res.json()}).then(res=> res.posts.reverse()).then(posts => {
        posts.map(post=>{ 
                 //create post title
                    title = document.createElement("h2")
                    title.setAttribute('class','post-title') 
                    title.append(post.title)
        
                    //create post content
                    desc = document.createElement('p')
                    desc.setAttribute('class','post-des')
                    desc.append(post.content)
        
                    //create post container 
                    container = document.createElement("div")
                    container.setAttribute('class','post')

                    //edit link
                    edit = document.createElement("button")
                    edit.setAttribute('type','button')
                    edit.setAttribute('onclick',`goEditPage("${post.id}")`)
                    edit.innerText = "Helo"
        
                    //adding post
                    document.querySelector('.container').append(container)
                    container.append(title)
                    container.append(desc)
                    container.append(edit)
                })
            })
}

const goEditPage = id=>{
    localStorage.setItem('edit',`${id}`)
    location.href = "http://localhost:8000/edit.html"
}

getPost()