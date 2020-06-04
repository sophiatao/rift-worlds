$(document).ready(function () {
    init();
});

function init() {
    $('#rules').hide();
    $('#character').hide();
    $('#main').show()
    $(".nav").click(getPage);
}

function getPage(event) {
    if (event.target.id == 'rules_nav') {
        $('#main').hide();
        $('#rules').show();
    }
    else if (event.target.id == 'character_nav') {
        $('#main').hide();
        $('#character').show();
    }
    else if (event.target.id == 'return_nav') {
        $('#rules').hide();
        $('#character').hide();
        $('#main').show()
    }
}

function getReturnButton() {
    rulesDOM.append('<br><div class="hoverLink nav centered emphasis" id="return_nav">➤ Return</div>');
    $(".nav").click(getPage);
}