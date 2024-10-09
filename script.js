function switchOff() {
    var bulbEle = document.getElementById("bulb-id");
    bulbEle.src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    var catEle = document.getElementById("cat-id");
    catEle.src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    var switchStatusEle = document.getElementById("switch-status-id");
    switchStatusEle.textContent = "Switched Off";
    document.getElementById("switch-on-btn").style.backgroundColor = "#22c55e";
    document.getElementById("switch-off-btn").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    var bulbEle = document.getElementById("bulb-id");
    bulbEle.src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    var catEle = document.getElementById("cat-id");
    catEle.src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    var switchStatusEle = document.getElementById("switch-status-id");
    switchStatusEle.textContent = "Switch On";
    var switchOnBtn = document.getElementById("switch-on-btn");
    switchOnBtn.style.backgroundColor = "#cbd2d9";
    var switchOffBtn = document.getElementById("switch-off-btn");
    switchOffBtn.style.backgroundColor = "#e12d39";
}
