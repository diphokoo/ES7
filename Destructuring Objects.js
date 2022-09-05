const player = {
    name: 'Lebron James',
    names: 'Lebron James',
    club: 'LA Leakers',
    address: {
        city: 'Los Angeles'
    }
};

console.log(player.address.city);

const { name, club, address: {city}, names } = player;

console.log( `${name} plays for ${club}`);

console.log(`${names} lives in ${city}`);