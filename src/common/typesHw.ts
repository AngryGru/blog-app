import React from "react";

/* HOMEWORK
С ниже приведенным массивом решить следующие задачи. 
Все функции и данные должны быть протипизированы: 
*/
type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};

type Users = Array<User>;

const users: Users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];
// 1. Создать строку из имен пользователей через запятую
type GetNames = (users: Array<User>) => string;

const getNames: GetNames = (users) => {
  let usersNames = users.map((item) => item.name).toString();
  console.log(usersNames);
  return usersNames;
};

// 2. Посчитать общее количнство машин у пользователей
type GetCarAmount = (users: Array<User>) => number;

const getCarAmount: GetCarAmount = (users) => {
  let carAmount = 0;
  users.forEach((item) => {
    item.cars ? (carAmount += item.cars.length) : item;
  });
  console.log(carAmount);
  return carAmount;
};

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
type getEducatedUsers = (users: Array<User>) => Array<User>;

const getEducatedUsers: getEducatedUsers = (users) => {
  let educatedUsers = users.filter((user) => user.hasEducation);
  console.log(educatedUsers);
  return educatedUsers;
};

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
type getAnimalOwners = (users: Array<User>) => Array<User>;

const getAnimalOwners: getAnimalOwners = (users) => {
  let animalOwners = users.filter((user) => user.animals);
  console.log(animalOwners);
  return animalOwners;
};

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
type getCarBrands = (users: Array<User>) => string;

const getCarBrands: getCarBrands = (users) => {
  let cars: string[] = [];
  users.forEach((item) => {
    if (item.cars) {
      item.cars.forEach((car) => cars.push(car));
    }
  });
  let carBrands = cars.toString();
  console.log(carBrands);
  return carBrands;
};
////////////////////////////////////////////////////////

/* OPTIONAL HOMEWORK
Протипизировать данные.
*/
type Faculty = {
  id: number;
  faculty: string;
  subjects: string[];
  countStudents: number;
};

type Faculties = Array<Faculty>;

const faculties: Faculties = [
  {
    id: 1,
    faculty: "History department",
    subjects: ["The World History", "History of Rome"],
    countStudents: 44,
  },
  {
    id: 2,
    faculty: "Department of Biology",
    subjects: ["biology", "chemistry"],
    countStudents: 50,
  },
  {
    id: 3,
    faculty: "Faculty of Mathematics",
    subjects: ["mathematics", "geometry", "trigonometry"],
    countStudents: 72,
  },
  {
    id: 4,
    faculty: "Faculty of Design",
    subjects: ["ui", "ux", "graphic design"],
    countStudents: 37,
  },
];

type Movie = {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type: string;
  boxOffice: string;
  production: string;
};

type Movies = Array<Movie>;

const movies: Movies = [
  {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
  },
  {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
  },
];
