
    
 //add click event on links
document.querySelectorAll('.nav').forEach(function(el){  //select all w/ the class="nav"

    el.addEventListener('click', function(event) {
        let name = this.getAttribute('name') //get the name attribute corresponding to the clicked item
        //let content = document.querySelector('#' + name)//combine # + name to get the location to scroll to
        let content = document.getElementById(name) //get content associated with name associated with clicked element
        content.scrollIntoView(true)
        let navContainer = document.querySelector('#nav-container')
        let navContainerHeight = navContainer.clientHeight
        console.log(navContainerHeight) //nothing showing
        window.scrollBy(0, -navContainerHeight)  //(x, y values to scroll by)
        //content.scrollBy(0, -navContainerHeight)
        event.preventDefault()  //stop click event being folowed by browser
    })
})
