function languageSwitcher() {
    $('[lang]').hide();
    $('[lang="de"]').show();
    $('#lang-switch').val('de');
    $('#lang-switch').change(function() {
        const lang = $(this).val();
        switch (lang) {
            case 'de':
                $('[lang]').hide();
                $('[lang="de"]').show();
                break;
            case 'en':
                $('[lang]').hide();
                $('[lang="en"]').show();
                break;
            default:
                $('[lang]').hide();
                $('[lang="de"]').show();
                break;
        }

        var bg = $('.lang-background');
        var langContainer = $('.lang-container');
        bg.width(langContainer.width());
        bg.height(langContainer.height());
    });
    var bg = $('.lang-background');
    var langContainer = $('.lang-container');
    bg.width(langContainer.width());
    bg.height(langContainer.height());
}