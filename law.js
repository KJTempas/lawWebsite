
    
 //add click event on links
document.querySelectorAll('.nav').forEach(function(el){  //select all w/ the class="nav"

    el.addEventListener('click', function(event) {
        let name = this.getAttribute('name')
        let content = document.querySelector('#' + name)//combine # + name to get the location to scroll to
        content.scrollIntoView(true)
        let navContainerHeight = navigator.containerHeight
        content.scrollBy(0, -navContainerHeight)
        event.preventDefault()  //stop click event being folowed by browser
    })
})
