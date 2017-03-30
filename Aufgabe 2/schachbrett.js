document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (i % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
    }
});
//# sourceMappingURL=schachbrett.js.map