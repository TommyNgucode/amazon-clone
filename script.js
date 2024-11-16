const imgs = document.querySelectorAll('.header-slider ul img');/*multuple elements within ul, there are 6 imgs, to select all do querySelectorAll*/
const prev_butn = document.querySelector('.control-previous');
const next_butn = document.querySelector('.control-next'); /*makes variable assign to specific element, since theres only one element
you use querySelector*/

let slideTracker = 0; /*tracks imgs, e.g. 0 is the first, 1 is the second etc*/


function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; /*loops the entire 6 imgs and make them display nothing e.g. "none" */
    }
    imgs[slideTracker].style.display = 'block'; /*makes page visible based off of slideTracker value*/
}
changeSlide(); /*calls the function*/

prev_butn.addEventListener('click', (e) => { 
    /* The 'click' parameter refers to the event type that addEventListener is listening for, 
       and 'e' is the event object passed to the event handler function. */
    
    if (slideTracker > 0) { 
        /* If slideTracker is greater than 0, decrement its value. This means if the current image is not the first one, move to the previous image. */
        slideTracker--; 
    } else { 
        /* If the current image is the first one, set slideTracker to the last image index (imgs.length - 1). This wraps the slider back to the last image. */
        slideTracker = imgs.length - 1;
    }
    
    changeSlide(); 
    /* Call the changeSlide function to update the displayed image based on the updated slideTracker value. */
});



next_butn.addEventListener('click', (e)=> {
    if (slideTracker < imgs.length - 1) {
        slideTracker++;
    } else {
        slideTracker = 0;
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}



// const scrollTop = document.querySelector('#scroll-top');


// scrollTop.addEventListener('click', ()=> {
//     window.scrollTo({top: 0, behavior: 'smooth'});
// })