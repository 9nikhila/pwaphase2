this.addEventListener('install',function(event){
  event.waitUntill(
caches.open('my cache').then(function(e){
  e.addAll(['/css/form.css',
  '/css/index.css',
  '/css/resume.html',
  '/js/get.js',
  '/js/main.js',
  '/js/resume.js',
  '/js/sw.js',
  '/index.html',
  '/form.html',
  '/resume.html',

  ])
})
  )
})
// fetch addEventListener
this.addEventListener('fetch',function(event){
event.respondWith(caches.open('my cache')
.then(function(cache){
return cache.match(evnt.request)
.then(function(result){
  return result || fetch(event.request)
  .then(function(result){
    cache.put(event.request.result.clone());
    return result;
  })
})
})

)

})
