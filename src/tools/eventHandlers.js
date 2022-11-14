import fetchImages from "./fetchImages"
import refs from "./refs";
import render from "./render";
import Notiflix from "notiflix";
import { slider } from "./slider";


const ref=refs()


let count=1;
let previousSearch='';

async function onSubmit(e) {
    e.preventDefault()
    const form=e.currentTarget
    const{elements:{searchQuery}}=form
    if(searchQuery.value.toLowerCase()===previousSearch.toLowerCase()){
        return;
    }
    try {
        const images=await fetchImages(searchQuery.value,count)
    if (images.length===0) {
        ref.gallery.innerHTML='';
        ref.loadMoreBtn.classList.remove('active')
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        return;
    }
    if (!ref.loadMoreBtn.classList.contains('active')) {
        ref.loadMoreBtn.classList.add('active')
    }
    Notiflix.Notify.success('Hooray! We found totalHits images.')
    previousSearch=searchQuery.value
    ref.gallery.innerHTML=render(images)
    slider.refresh()
    count=1
    } catch (error) {
        console.log(error);
    }
    
}

async function onLoadMore(e){
    e.preventDefault()
    count++
    try {
        const images=await fetchImages(previousSearch,count)
        if (images.length<40) {
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
            ref.loadMoreBtn.classList.remove('active')
        }
        ref.gallery.insertAdjacentHTML('beforeend',render(images))
        slider.refresh()
    } catch (error) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
        ref.loadMoreBtn.classList.remove('active') 
        count=1
    }
}
export {onSubmit,onLoadMore}