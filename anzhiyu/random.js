var posts=["2024/11/13/这是一篇新的博文/","2024/11/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };