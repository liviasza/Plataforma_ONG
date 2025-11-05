// Simple hash-based SPA router
export function mountRoutes(map){
  window.__routes = map;
}
export function router(){
  function resolve(){
    const path = location.hash.replace('#','') || '/';
    const handler = window.__routes[path];
    if(handler) handler();
    else {
      // fallback to home
      window.__routes['/']();
    }
  }
  window.addEventListener('hashchange', resolve);
  window.addEventListener('load', resolve);
}
