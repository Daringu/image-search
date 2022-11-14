import "simplelightbox/dist/simple-lightbox.min.css"
import getRefs from "./tools/refs"
import {onSubmit,onLoadMore} from './tools/eventHandlers'
import { scroll } from "./tools/scrollHandlers"
import lodas from 'lodash'


const refs=getRefs()

refs.loadMoreBtn.addEventListener('click',onLoadMore)
refs.form.addEventListener('submit',onSubmit)
document.addEventListener('scroll',lodas.throttle(scroll,700))