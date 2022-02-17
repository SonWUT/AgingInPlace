export default  function getUrlFromRoute(routes, key){
    let route = routes.filter(routes=>{
        return routes.key === key;
    })
    //
    if (route.length){
        return route[0].path
    }
    else {
        return "/";
    }
    
  }
