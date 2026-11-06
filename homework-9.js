import { postComments } from "./comments.js";


// 2. Фильтрация массива чисел

const numbers=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const filteredNumbers=numbers.filter( number => number >= 5 );
console.log( filteredNumbers );


// 3. Проверка наличия элемента в массиве

const dish = ["ложка", "вилка", "нож", "тарелка", "стакан"];
const searchedDish = dish.includes("тарелка");
console.log( searchedDish );


// 4. Изменение порядка элементов массива на противоположный


function reverseArray(arr) {
    return arr.reverse();
}
console.log( reverseArray( numbers ) );
console.log (reverseArray( furniture ) );


// 7. Фильтрация комментариев по email с .com


const filteredComments=comments.filter( comment => comment.email.theEnd( ".com" ) );
console.log( filteredComments );


// 8. Изменение postId в зависимости от id пользователя

const postIdCounts=comments.map( comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log( postIdCounts );


// 9. Создание массива объектов только с id и name


const idAndName=comments.map( comment => ({
  id: comment.id,
  name: comment.name
}));
console.log( idAndName );


// 10. Добавление свойства isInvalid


const updatedComments=comments.map( comment => {
  return {
      ...comment,
      isInvalid: comment.body.length > 180
  };
});
console.log( updatedComments );


// 11. Получение массива email с помощью reduce и map


const emailsReduce = comments.reduce( ( acc, comment ) => {
    acc.push( comment.email );
    return acc;
}, []);
console.log( emailsReduce );

const emailsMap=comments.map( comment => comment.email );
console.log( emailsMap )


// 12. Преобразование массива email в строку


const emailsString=emailsMap.toString();
console.log( emailsString );

const emailsJoin=emailsMap.join( ', ' );
console.log( emailsJoin );




