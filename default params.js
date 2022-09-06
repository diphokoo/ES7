const leadSinger = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");

// undifined

const leadSinger1 = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger1();

// defined defailt function

const leadSinger2 = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger2();

// paasing function on default function

const leadSinger3 = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger3("Martin Chris");