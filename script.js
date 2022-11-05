let s = 0, l = 200;
function scrollVideoBar(e) {
    console.log(e);
    let elem = document.getElementById("videoContainer");
    if (e == 1) {
        s = l;
        l = l + 200;
        elem.scroll(s, l);
    }
    else {
        l = s;
        s = s - 200;
        elem.scroll(s, l);
    }

}
function loadVideos() {
    let n = document.querySelectorAll(".videoTile").length;
    for (var i = 0; i < n; i++) {

        document.querySelectorAll(".videoTile")[i].innerHTML = `<iframe width="240" height="135" src="https://www.youtube.com/embed/7VW3KZbIyVo?rel=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    }
}

function viewOptions() {

    let view = document.getElementById("container");
    let list = document.getElementById("listView");
    let grid = document.getElementById("gridView");
    if (list.style.display == "none") {
        grid.style.display = "none";
        list.style.display = "inline-block";
        view.style.gridTemplateColumns = "1fr";
    }
    else {
        list.style.display = "none";
        grid.style.display = "inline-block";
        view.style.gridTemplateColumns = "repeat(auto-fill, 300px)";
    }

}