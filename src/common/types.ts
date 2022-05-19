import React from "react";

export type Card = {
  id?: string;
  image: string;
  title: string;
  text: string;
  date: string;
};

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   age: number;
// };
// type Users = Array<User>;

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   currency: string;
//   ingredients: Array<string>;
//   type: string;
//   available: boolean;
// };
// type Products = Array<Product>;

// const users: Users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//     age: 23,
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//     age: 20,
//   },
// ];

// const products: Products = [
//   {
//     id: 1,
//     name: "Burger Premium",
//     price: 6,
//     currency: "euro",
//     ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
//     type: "burger",
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Burger Lite",
//     price: 2.3,
//     currency: "euro",
//     ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
//     type: "burger",
//     available: true,
//   },
// ];

// type GetUserType = (id: number, users: Users) => User | undefined;

// const getUser: GetUserType = (id, users) =>
//   users.find((user) => user.id === id);

// /* CLASSWORK
// С ниже приведенным массивом решить следующие задачи.
// Все функции и данные должны быть протипизированы:
// */
// type Country = {
//   country: string;
//   abbreviation: string;
//   city: string;
//   currency_name: string;
//   population: number;
// };

// const countries: Array<Country> = [
//   {
//     country: "United Arab Emirates",
//     abbreviation: "AE",
//     city: "Abu Dhabi",
//     currency_name: "Arab Emirates Dirham",
//     population: 9630959,
//   },
//   {
//     country: "Poland",
//     abbreviation: "PL",
//     city: "Warszawa",
//     currency_name: "Polish Zloty",
//     population: 37974750,
//   },
//   {
//     country: "Russian Federation",
//     abbreviation: "RU",
//     city: "Moscow",
//     currency_name: "Russian Ruble",
//     population: 144478050,
//   },
// ];

// // 1. Создать строку из названий стран через запятую.
// type GetCountries = (countries: Array<Country>) => string;

// const getCountries: GetCountries = (countries) => {
//   let countryNames = "";
//   countries.forEach((item) => {
//     countryNames += `${item.country}, `;
//   });
//   console.log(countryNames);
//   return countryNames;
// };

// // 2. Посчитать общее количество людей в данном массиве стран.
// type GetPeopleAmount = (countries: Array<Country>) => number;

// const getPeopleAmount: GetPeopleAmount = (countries) => {
//   let peopleAmount = 0;
//   countries.forEach((item) => {
//     peopleAmount += item.population;
//   });
//   console.log(peopleAmount);
//   return peopleAmount;
// };

// // 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
// type GetSortedCountries = (countries: Array<Country>) => Array<Country>;

// const getSortedCountries: GetSortedCountries = (countries) => {
//   let result = countries.sort((a, b) => (a.country > b.country ? 1 : -1));
//   console.log(result);
//   return result;
// };

// // 4. Получить массив валют.
// type GetCurrencyArray = (countries: Array<Country>) => Array<string>;

// const getCurrencyArray: GetCurrencyArray = (countries) => {
//   // let currencyArray: Array<string> = [];
//   // countries.forEach((item) => {
//   //   currencyArray.push(item.currency_name);
//   // });
//   // console.log(currencyArray);
//   // return currencyArray;
//   let currencyArray = countries.map((item) => item.currency_name);
//   return currencyArray;
// };

// // 5. Получить массив городов, отсортированных в алвавитном порядке.
// type GetCitiesArray = (countries: Array<Country>) => Array<string>;

// const getCitiesArray: GetCitiesArray = (countries) => {
//   // let citiesArray: Array<string> = [];
//   // countries.forEach((item) => {
//   //   citiesArray.push(item.city);
//   // });
//   // citiesArray.sort();
//   // console.log(citiesArray);
//   // return citiesArray;
//   let citiesArray = countries.map((item) => item.city).sort();
//   return citiesArray;
// };

// // 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.
// type GetAveragePopulation = (countries: Array<Country>) => number;

// const getAveragePopulation: GetAveragePopulation = (countries) => {
//   let pops = countries.map((item) => item.population);
//   let averagePopulation = Math.round(
//     pops.reduce((a, b) => a + b) / pops.length
//   );
//   console.log(averagePopulation);
//   return averagePopulation;
// };
