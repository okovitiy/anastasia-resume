(function (G) {
        var ed-spin = G.document.getElementById("ed-spin"),
            timeline = G.document.getElementById("timeline");
        ed-spin.onmouseover = function () {
            ed-spin.style.display = "none";
            timeline.style.visibility = "visible";
        };
    }(this));
