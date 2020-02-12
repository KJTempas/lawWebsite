
    
 //add click event on links
document.querySelectorAll('.nav').forEach(function(el){  //select all w/ the class="nav"

    el.addEventListener('click', function(event) {
        let name = this.getAttribute('name')
        let content = document.querySelector('#' + name)//combine # + name to get the location to scroll to
        content.scrollIntoView(true)
        event.preventDefault()  //stop click event being folowed by browser
    })
})
