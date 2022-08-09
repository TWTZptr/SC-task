import { readFile } from 'fs';

const data = JSON.parse(readFile('./init-data.json'));

db.cities.insertMany(data.cities);

db.citizens.insertMany(data.citizens);
