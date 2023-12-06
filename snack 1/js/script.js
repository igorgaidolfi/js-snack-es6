// FUNZIONE CHE CERCA IL NOME E IL PESO DELLA BICI CON L'AIUTO DELL'ARRAY PESO BICICLETTA
function lightestBike(array,min,bikes){
    for(let i=0; i<array.length;i++){
        if(array[i] === min){
            return bikes[i]
        }
    }
}
// DEFINISCO UN ARRAY DI BICICLETTE CON MARCA E PESO
const bikes =[
{
    name : 'Bianchi',
    weight : 8.8,
},
{
    name : 'Colnago',
    weight : 8.1,
},
{
    name : 'Pinarello',
    weight : 6.9,
},
{
    name : 'Wilier Triestina',
    weight : 9.1,
},
{
    name : 'Specialized',
    weight : 7.5,
},
]
// DEFINICSCO UN ARRAY VUOTO DOVE INSERIRE IL PESO DELLE BICI
let weightBike=[]
// CICLO CHE PUSHA IN UN ARRAY IL PESO DELLE BICI
bikes.forEach((elem) => {
    let {weight} = elem
    weightBike.push(weight)
    console.log(elem)
})
// DEFINISCO UNA VARIABILE DA CONFRONTARE CON L'ARRAY PESO BICI E ALLA FINE ASSEGNA IL VALORE MINORE
let minValue= 100
for(let i=0; i<bikes.length;i++){
    if(bikes[i].weight<minValue){
        minValue=bikes[i].weight
    }
}
// DEFINISCO UNA VARIABILE DOVE ASSEGNO IL NOME E IL PESO DELLA BICI PIU' LEGGERA
let lighterBike= lightestBike(weightBike,minValue,bikes)
console.log(`La ${lighterBike.name} è la bicletta piu' leggera con un peso di ${lighterBike.weight} Kg`)
