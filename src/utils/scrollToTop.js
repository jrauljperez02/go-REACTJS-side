const scrollToTop = () => {
    
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
    window.location.reload();
}
export default scrollToTop;