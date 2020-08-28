/**
 * Реализовать функцию arrayDiff в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива.
 * Возвращает новый массив, который состоит только из тех элементов,
 * которые встрелились в одном массиве, но не встретились в другом
 *
 * ([1, 2, 3], [1, 2, 4])) -> 1ца и 2ка есть и там, и там - их выкидываем
 * 3ка есть только в 1ом массиве, 4ка только во 2ом. Возвращаем массив [3, 4]
 *
 * ([1, 3, 3, 4], [1, 3, '4'])) -> возвращаем [4, '4'],
 * так как одно значение - чисто, второе - строка.
 * Значения 1, 3 - есть и в 1ом и во 2ом массиве. Их выбрасываем.
 *
 * console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
 * console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']
 */

// eslint-disable-next-line import/prefer-default-export
export function arrayDiff(arr1, arr2) {
  const filteredArr1 = arr1.filter(function(ele) {
    return arr2.includes(ele) === false;
  });

  const filteredArr2 = arr2.filter(function(ele) {
    return arr1.includes(ele) === false;
  });

  return [...new Set([...filteredArr1, ...filteredArr2])];
}
