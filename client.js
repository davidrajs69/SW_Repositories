document.getElementById("demo").innerHTML = "Hello JavaScript!";

//register Service Worker
if('serviceWorker' in navigator){
    console.log('Main : Service worker Supported');
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./sw_cache.js').then(ret =>{
            console.log('Main : Service worker Registered');
        }).catch(err => {
            console.error(err)
        });
    });
}