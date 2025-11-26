interface Audiplayer{
    audioVolumen:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year: number;
}

const audioplayer:Audiplayer={
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year: 2015
    }
}

const song= 'New Song';

//destructuracion
const {song:anothertsong, songDuration:duration, details}=audioplayer;
const {author:nameauthor}=details;

/*
console.log('Song: ', anothertsong);
console.log('Duration: ', duration);
console.log('Author: ', nameauthor);
*/

//destructuracion arreglos
/*
const dbz: string[]=['Goku','Vegeta','Trunk'];
const trunks=dbz[3];
*/

const [p1,p2,trunks]: string[]=['Goku','Vegeta','Trunk'];
console.error('Personaje 3:',trunks);

export{};