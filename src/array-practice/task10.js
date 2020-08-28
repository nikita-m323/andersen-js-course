/**
 * Реализовать функцию membersOnActiveMeetups в этом файле, и экспортировать ее.
 *
 * Функция принимает массив meetups,
 * и возвращает суммарное количество человек, находящихся на активных митапах
 *
 * Пример вызова с нижним набором данных
 * membersOnActiveMeetups(meetups); // 1500
 */

// Раскомментировать нижнее, при начале реализации

// eslint-disable-next-line import/prefer-default-export
export function membersOnActiveMeetups(array) {
  return array.reduce(function(sum, item) {
    if (item.isActive === true) {
      return sum + item.members;
    }
    return sum;
  }, 0);
}
