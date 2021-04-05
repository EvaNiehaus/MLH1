import sel from '../../data/selectors'; // внутри переменной sel лежит весь файл selectors
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age field suite', function () { //define suite title by passing a string

    before('Open App', function () {
        browser.url(' '); //open baseUrl
    });

    describe('Placeholder', function () {

        it('TC-XXX  Placeholder is correct', function () {
            expect(submitBtn).toEqual(true);
        });
    });

    describe('Positive cases', function () {

        it('TC-XXX  Age = 1', function () {
            inputValues4(name.default, gender.she, 1, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-XXX  Age = 1000000000000', function () {
            expect(submitBtn).toEqual(true);
        });
    });

    describe('Negative cases', function () {

            it('TC-XXX  Age =0', function () {
                expect(submitBtn).toEqual(true);
            });

            it('TC-XXX  Age =9999999999999', function () {
                expect(submitBtn).toEqual(true);
            });

        });

    });


