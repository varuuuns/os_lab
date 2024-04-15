document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', copy_func);
});

function copy_func(event) {
    link=event.target.previousElementSibling;
    path=link.href;

    fetch(path)
        .then(response =>{
            if(!response.ok){
                throw new Error('Failed to fetch file');
            }
            return response.text();
        })
        .then(text =>{
            navigator.clipboard.writeText(text)
                .then(() =>{    
                    alert('Text copied successfully!');
                })
                .catch(err =>{
                    console.error('Error copying text:',err);
                });
        })
        .catch(error => {
            console.error('Error fetching file:',error);
        });
}
