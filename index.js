// Завдання 1
/**
 * Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1.
 */
function complexConvert(data) {
  let result = {};

  let obj = JSON.parse(data);
  let keys = Object.keys(obj);

  for (let key of keys) {
    let value = obj[key];

    if (typeof value === "number") {
      result[key] = value + 1;
    } else {
      result[key] = value;
    }
  }

  return JSON.stringify(result);
}

console.log("Завдання: 1 ==============================");
const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log(complexConvert(JSON.stringify(data)));
// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Завдання 2

/**
 * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 *
 * url - URL у вигляді рядка.
 *
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення].
 */
function manipulateUrl(url) {
  let urlObj = new URL(url);

  urlObj.protocol = "https";

  urlObj.host = "newhost.com";

  urlObj.searchParams.append("newParam", "newValue");

  urlObj.searchParams.delete("oldParam");

  return {
    href: urlObj.href,
    protocol: urlObj.protocol,
    host: urlObj.host,
    pathname: urlObj.pathname,
    search: urlObj.search,
    params: Array.from(urlObj.searchParams),
  };
}

console.log("Завдання: 2 ==============================");

// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3

/**
 * Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL.
 */
function searchParamsURL(url) {
  let urlObject = new URL(url);

  let searchParams = urlObject.searchParams;

  let params = new Map([...searchParams]);

  return params;
}

console.log("Завдання: 3 ==============================");

// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Завдання 4

/**
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  let urlObj = new URL(newUrl);

  let paramsArray = Object.entries(paramsObj);

  for (let [key, value] of paramsArray) {
    urlObj.searchParams.append(key, value);
  }

  return urlObj.toString();
}

// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5

/**
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  let urlObj = new URL(url);

  for (let key of keys) {
    urlObj.searchParams.delete(key);
  }

  return urlObj.href;
}

// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname

// Завдання 6

/**
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  let urlObj = new URL(url);

  let searchParams = new URLSearchParams(params);

  urlObj.search = searchParams;

  return urlObj.toString();
}

// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7

/**
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  let newURL = new URL(url);

  if (!hash.startsWith("#")) {
    hash = "#" + hash;
  }
  newURL.hash = hash;

  return newURL.toString();
}

// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash

// Завдання 8

/**
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  let newUrl = new URL(url);

  newUrl.searchParams.append(key, value);

  return newUrl.toString();
}

// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue

// Завдання 9
/**
 * Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 *
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  let newURL = new URL(url);

  for (let [key, value] of Object.entries(params)) {
    newURL.searchParams.set(key, value);
  }

  return newURL.toString();
}

console.log("Завдання: 9 ==============================");

// Приклад використання функції modifyURLParameters
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10
/**
 * Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 *
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 *                    а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  let urlObj = new URL(url);

  let searchParams = urlObj.searchParams;

  let result = {};

  for (let param of params) {
    result[param] = searchParams.has(param);
  }

  return result;
}

console.log("Завдання: 10 ==============================");

// Приклад використання функції checkURLParameters
let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Виведе: { param1: true, param2: true, param3: true, param4: false }

// Завдання 11

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  let urlObj = new URL(url);

  if (options.searchParams) {
    let searchParams = new URLSearchParams(options.searchParams);

    urlObj.search = searchParams.toString();
  }

  if (options.protocol) {
    urlObj.protocol = options.protocol;
  }

  if (options.host) {
    urlObj.host = options.host;
  }

  return urlObj.toString();
}

// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 12
/**
 * Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 *
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Повертається - Новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  let newUrl = new URL(url);

  if (options.has("append")) {
    for (let [key, value] of options.get("append")) {
      newUrl.searchParams.append(key, value);
    }
  }

  if (options.has("delete")) {
    for (let key of options.get("delete")) {
      newUrl.searchParams.delete(key);
    }
  }

  return newUrl.toString();
}

console.log("Завдання: 12 ==============================");

// Приклад використання функції manipulateQuery
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'

// Завдання 13

/**
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  let urlObject = new URL(url);

  return {
    origin: urlObject.origin,
    hostname: urlObject.hostname,
    port: urlObject.port,
    username: urlObject.username,
    password: urlObject.password,
  };
}

// Приклад використання функції getUrlData
console.log("Завдання: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Завдання 14

/**
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  let urlObj = new URL(url);

  let paramsArray = Array.from(urlObj.searchParams.entries());

  paramsArray.sort((a, b) => a[0].localeCompare(b[0]));

  urlObj.search = "";

  for (let [key, value] of paramsArray) {
    urlObj.searchParams.append(key, value);
  }

  return urlObj.toString();
}

// Приклад використання функції sortUrlParams
console.log("Завдання: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'

// Завдання 15

/**
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  let urlObj = new URL(url);

  let params = urlObj.searchParams;

  let keys = [...params.keys()];

  let values = [];

  for (let key of keys) {
    let value = params.getAll(key);

    values.push(...value);
  }

  return values;
}

// Приклад використання функції getURLValues
console.log("Завдання: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);

// Завдання 16

/**
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  try {
    let urlObject = new URL(url);

    if (urlObject.searchParams && urlObject.searchParams.keys().next().value) {
      return Array.from(urlObject.searchParams.keys());
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

// Приклад використання функції getUrlKeys
console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]
