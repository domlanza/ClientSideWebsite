//Empty Array
var routes = [];

routes['/'] = home;
routes['#/home'] = home;
routes['#/twoCars'] = twoCars;
routes['#/blog'] = blog;


function router() {
    console.log("location.hash (the link that was clicked) is " + location.hash);
    var path = location.hash;
    if (!routes[path]) {
        var ele = document.createElement("div");
        ele.innerHTML = "<h4>Error: path '" + path + "' was never added to the route array</h4>";
        inject(ele);
    } else {
        var newDOM = routes[path]();
        inject(newDOM);
    }
}
window.addEventListener('hashchange', router);
window.location.hash = '#/xxx';
window.location.hash = '#/home';