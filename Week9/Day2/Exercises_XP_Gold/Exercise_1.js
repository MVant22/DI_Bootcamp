const person = {
    name: 'John Doe',
    age: 25,
};

function printFullName({name, location: {country = 'Mauritius', city = 'Beau Bassin', coordinates: [lat, lng] = [0,0]} = {}}){
    console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
};


printFullName(person)