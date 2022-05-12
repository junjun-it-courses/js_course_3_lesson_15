// localStorage.setItem('length', 'test info');
//
// localStorage.setItem('test1', 'test info 1');
//
// localStorage.setItem('test2', 'test info 2');
//
// localStorage.setItem('test3', 'test info 3');


// setTimeout(() => {
//     console.log(localStorage.getItem('test'));
// }, 1000)



// Также можно получать/записывать данные, как в обычный объект:

// установить значение для ключа
// localStorage.test = 2;
// console.log(localStorage)

// получить значение по ключу
// console.log( localStorage.getItem('test') );
// console.log( localStorage.test );

// удалить ключ
// localStorage.removeItem('test')
// delete localStorage.length;


// console.log(localStorage)
//
// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
// }




// Объекты хранилища localStorage и sessionStorage
// предоставляют одинаковые методы и свойства:

//      setItem(key, value) – сохранить пару ключ/значение.
//      getItem(key) – получить данные по ключу key.
//      removeItem(key) – удалить данные с ключом key.
//      clear() – удалить всё.
//      key(index) – получить ключ на заданной позиции.
//      length – количество элементов в хранилище.