require(["gitbook", "lodash", "jQuery"], function(gitbook, _, $) {
    var fontState;

    var THEMES = {
        "white": 0,
        "sepia": 1,
        "night": 2
    };

    var FAMILY = {
        "serif": 0,
        "sans": 1
    };

    // Save current font settings
    function saveFontSettings() {
        gitbook.storage.set("fontState", fontState);
        update();
    }

    // Increase font size
    function enlargeFontSize(e) {
        e.preventDefault();
        if (fontState.size >= 4) return;

        fontState.size++;
        saveFontSettings();
    };

    // Decrease font size
    function reduceFontSize(e) {
        e.preventDefault();
        if (fontState.size 