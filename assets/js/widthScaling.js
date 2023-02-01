function widthScaler2Col(className, parent2ColMinWidth) {
    const f = function() {
        const item = $(`.${className}`),
            parentWidth = item.parent().width();
        if (parentWidth < parent2ColMinWidth) {
            item.css("width", "100%");
        } else {
            item.css("width", "49%");
        }
    }

    $(window).ready(f);
    $(window).resize(f);
}

function marginWidthScaler(className, parentMinWidth) {
    const f = function() {
        const item = $(`.${className}`),
            parentWidth = item.parent().width();
        if (parentWidth < parentMinWidth) {
            item.css("margin-left", "0");
            item.css("margin-right", "0");
            item.css("width", "90vw");
        } else {
            item.css("margin-left", "auto");
            item.css("margin-right", "auto");
            item.css("width", "");
        }
    }

    $(window).ready(f);
    $(window).resize(f);
}