let timeout;
function timer() {
   timeout = setTimeout(() => {
        alert('hello mwa')
    }, 2000);
}

function clear(){
    clearTimeout(timeout)

}