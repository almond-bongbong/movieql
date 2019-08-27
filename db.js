export const people = [
  {
    id: 0,
    name: 'cmlee',
    age: 29,
    gender: 'male'
  },
  {
    id: 1,
    name: 'hello',
    age: 21,
    gender: 'male'
  },
  {
    id: 2,
    name: 'hi',
    age: 13,
    gender: 'male'
  },
];

export const getById = id => people.find(p => p.id === id);