export const faqTag = (e) =>{
    // Hide other elements and change the icon button.
    const hideTag = () =>{
        document.querySelectorAll('.faq').forEach(item =>{
            item.classList.remove('open')
            item.children[1].innerHTML = '&#43;';
        })
    }

    // Toggle targeted element to show with the forEach loop
    
   if (e.target.classList.contains('faq')) {
        hideTag()
        e.target.classList.toggle('open')
        e.target.querySelector('.btn').innerHTML = '&#8722;'
   }
    else if (e.target.className === 'btn') {
        hideTag()
        e.target.parentElement.classList.toggle('open')
        e.target.innerHTML = '&#8722;'
    }
    else if (e.target.tagName === 'H3') {
        hideTag()
        e.target.parentElement.parentElement.classList.toggle('open')
        e.target.querySelector('.btn').innerHTML = '&#8722;'
    }
}
