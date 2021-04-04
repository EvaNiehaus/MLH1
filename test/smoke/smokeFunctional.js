import sel from '../../data/selectors'; // внутри переменной sel лежит весь файл selectors

describe('Required fields and story created', function () { //define suite title by passing a string

    before('Open App', function () {
        browser.url(' '); //open baseUrl
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();

        browser.pause(2000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });
});


