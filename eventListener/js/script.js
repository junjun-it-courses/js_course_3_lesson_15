'use strict';

void function () {
    const form = document.querySelector('#form-example');
    const dataKey = 'formData';
    const inputsSelector = 'input, select, textarea';

    form.addEventListener('submit', event => {
       event.preventDefault();

       let inputs = event.target.querySelectorAll(inputsSelector);
       inputs = Array.from(inputs);

        let data = inputs.reduce(
            (accum, item) => {
                accum[item.name] = item.value;
                return accum;
            },
            {}
        )

        data = JSON.stringify(data);
        localStorage.setItem(dataKey, data);
    })


    document.addEventListener('DOMContentLoaded', () => {
        let data = localStorage.getItem(dataKey);
        if(!data) return;

        data = JSON.parse(data);

        let inputs = form.querySelectorAll(inputsSelector);
        inputs = Array.from(inputs);

        inputs.forEach(item => {

            try {
                item.value = data[item.name]
            } catch (err) {
                console.dir(err)
            }

        })

        console.log(inputs)
    })

}()