window.addEventListener('load', ()=>{

  //https://developers.google.com/web/fundamentals/primers/service-workers
  
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope:',  registration.scope);
    }).catch(function(error) {
      console.log('ServiceWorker registration failed:', error);
    });
  }
  
  });
  