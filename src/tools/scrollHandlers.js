import refs from "./refs"

let previous=0;
const ref=refs()
function scroll(e) {
    
        if (window.scrollY>previous&&ref.upBtn.classList.contains('upoff')) {
                ref.upBtn.classList.remove('upoff')
        }
    if (window.scrollY>previous&&!ref.form.classList.contains('disabled')) {
            ref.form.style.opacity=0
            ref.form.classList.add('disabled')
    }
     if (window.scrollY<previous&&ref.form.classList.contains('disabled')) {
            ref.form.classList.remove('disabled')
            ref.form.style.opacity=1
    }
    if (window.scrollY<1800&&!ref.upBtn.classList.contains('upoff')) {
        ref.upBtn.classList.add('upoff')
}
    previous=window.scrollY
}

export {scroll}