// FUNZIONE CHE RITORNA UN NUMERO CASUALE DA 1 A 100
function randomNumberGenerator(){
    return Math.floor(Math.random()*100)+1
}
// DEFINISCO UN ARRAY DI SQUADRE CON NOME,PUNTI E FALLI 
const teams =[
    {
        name : 'Atalanta',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Fiorentina',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Arsenal',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Genoa',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Palermo',
        points : 0,
        fouls : 0,
    },
    ]
// CICLO CHE INSERISCE NUMERI CASUALI IN PUNTI E FALLI
for(let i=0;i<teams.length;i++){
    teams[i].points = randomNumberGenerator()
    teams[i].fouls = randomNumberGenerator()
}
console.log(teams)
// DEFINIRE UN ARRAY VUOTO PER INSERIMENTO DEI VALORI DI NOME E FALLI
let nameFouls=[]
// CICLO CON DESTRUTTURAZIONE PER PRENDERE IN CONSIDERAZIONE SOLI I VALORI DI NAME E FOULS
teams.forEach((elem) => {
    let {name,fouls} = elem
    nameFouls.push(name,fouls)
})
console.log(nameFouls)