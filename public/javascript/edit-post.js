async function editFormHandler(event) {
    event.preventDefault();
    console.log(event) 
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('input[name="post-text"]').value.trim();
    console.log(title + " title ");
    console.log(post_text + " text ")
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}
document.querySelector('.Edit-Post-Form').addEventListener('submit', editFormHandler); 