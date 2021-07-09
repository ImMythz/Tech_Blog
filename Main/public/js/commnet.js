const commnetForm = async function(event){
    event.preventDefault()

    const postId = document.querySelector('#post-id').value
    const body = document.querySelector('#comment-body').value

    console.log(postId)
    console.log(body)

    if (body){
        await fetch('/api/comment-route', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        // document.location.reload()
    }
}


document.querySelector('.comment-form')
document.addEventListener('submit', commnetForm)