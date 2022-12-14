const DATA = {
  cities: [
    {
      _id: 1,
      name: 'Москва',
      data: '10000000',
    },
    {
      _id: 2,
      name: 'Воронеж',
      data: '1000000',
    },
    {
      _id: 3,
      name: 'Санкт-Петербург',
      data: '3000000',
    },
  ],
  citizens: [
    {
      _id: 0,
      name: 'Анна',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 1,
      name: 'Степан',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Рочдельская ул.',
        },
      ],
    },
    {
      _id: 2,
      name: 'Виктор',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 3,
      name: 'Алексей',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Коптевская ул.',
        },
      ],
    },
    {
      _id: 4,
      name: 'Ярослав',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Отрадное р-н',
        },
        {
          type: 'street',
          name: 'Сигнальный проезд',
        },
      ],
    },
    {
      _id: 5,
      name: 'Антонина',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Отрадное р-н',
        },
        {
          type: 'street',
          name: 'Отрадная ул.',
        },
      ],
    },
    {
      _id: 6,
      name: 'Григорий',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Патриотов пр-т',
        },
      ],
    },
    {
      _id: 7,
      name: 'Александр',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Кривошеина ул.',
        },
      ],
    },
    {
      _id: 8,
      name: 'Владимир',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Ленина ул.',
        },
      ],
    },
    {
      _id: 9,
      name: 'Василий',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 10,
      name: 'Яков',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Светлановский пр-т',
        },
      ],
    },
    {
      _id: 11,
      name: 'Виктория',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 12,
      name: 'Николай',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Лиговский пр-т',
        },
      ],
    },
    {
      _id: 13,
      name: 'Валентин',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Воронежская ул.',
        },
      ],
    },
    {
      _id: 14,
      name: 'Михаил',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 15,
      name: 'Арсений',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 16,
      name: 'Варвара',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Рочдельская ул.',
        },
      ],
    },
    {
      _id: 17,
      name: 'Вячеслав',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Отрадное р-н',
        },
        {
          type: 'street',
          name: 'Сигнальный проезд',
        },
      ],
    },
    {
      _id: 18,
      name: 'Владислав',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Отрадное р-н',
        },
        {
          type: 'street',
          name: 'Сигнальный проезд',
        },
      ],
    },
    {
      _id: 19,
      name: 'Светлана',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Светлановский пр-т',
        },
      ],
    },
    {
      _id: 20,
      name: 'Константин',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 21,
      name: 'Мирослава',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 22,
      name: 'Семен',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Лиговский пр-т',
        },
      ],
    },
    {
      _id: 23,
      name: 'Ульяна',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Лиговский пр-т',
        },
      ],
    },
    {
      _id: 24,
      name: 'Влада',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Лиговский пр-т',
        },
      ],
    },
    {
      _id: 25,
      name: 'Наталья',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Воронежская ул.',
        },
      ],
    },
    {
      _id: 26,
      name: 'Ирина',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Воронежская ул.',
        },
      ],
    },
    {
      _id: 27,
      name: 'Кира',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Воронежская ул.',
        },
      ],
    },
    {
      _id: 28,
      name: 'Роман',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 29,
      name: 'Иван',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 30,
      name: 'Антон',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Патриотов пр-т',
        },
      ],
    },
    {
      _id: 31,
      name: 'Томара',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Патриотов пр-т',
        },
      ],
    },
    {
      _id: 32,
      name: 'Юлия',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 33,
      name: 'Петр',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 34,
      name: 'Елена',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 35,
      name: 'Валентина',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 36,
      name: 'Татьяна',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Центральный р-н',
        },
        {
          type: 'street',
          name: 'Рабочий пр-т',
        },
      ],
    },
    {
      _id: 37,
      name: 'Ян',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 38,
      name: 'Ольга',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 39,
      name: 'Анатолий',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Выборгский р-н',
        },
        {
          type: 'street',
          name: 'Орбели ул.',
        },
      ],
    },
    {
      _id: 40,
      name: 'Степан',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 41,
      name: 'Павел',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 42,
      name: 'Григорий',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Пресненский р-н',
        },
        {
          type: 'street',
          name: 'Гашека ул.',
        },
      ],
    },
    {
      _id: 43,
      name: 'Валерий',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Отрадное р-н',
        },
        {
          type: 'street',
          name: 'Сигнальный проезд',
        },
      ],
    },
    {
      _id: 44,
      name: 'Леонид',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 45,
      name: 'Тимофей',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 46,
      name: 'Олег',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Нарвская ул.',
        },
      ],
    },
    {
      _id: 47,
      name: 'Олег',
      city_id: 3,
      groups: [
        {
          type: 'city',
          name: 'Санкт-Петербург г.',
        },
        {
          type: 'district',
          name: 'Фрунзенский р-н',
        },
        {
          type: 'street',
          name: 'Лиговский пр-т',
        },
      ],
    },
    {
      _id: 48,
      name: 'Дмитрий',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Кривошеина ул.',
        },
      ],
    },
    {
      _id: 49,
      name: 'Жан',
      city_id: 1,
      groups: [
        {
          type: 'city',
          name: 'Москва г.',
        },
        {
          type: 'district',
          name: 'Коптево р-н',
        },
        {
          type: 'street',
          name: 'Коптевская ул.',
        },
      ],
    },
    {
      _id: 51,
      name: 'Иннокентий',
      city_id: 2,
      groups: [
        {
          type: 'city',
          name: 'Воронеж г.',
        },
        {
          type: 'district',
          name: 'Советский р-н',
        },
        {
          type: 'street',
          name: 'Кривошеина ул.',
        },
        {
          type: 'building',
          name: 'д. 32',
        },
      ],
    },
  ],
};

db.cities.insertMany(DATA.cities);

db.citizens.insertMany(DATA.citizens);
