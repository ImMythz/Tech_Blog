const commnetForm = async function(event){
    event.preventDefault()

    const postId = $("#post-id").value
    const body = $("#comment-body").value

    if (body){
        await fetch('./api/comment-route', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        document.location.reload()
    }
}

documnet
    .querySelector('.comment-form')
    .addEventListener('submit', commnetForm)