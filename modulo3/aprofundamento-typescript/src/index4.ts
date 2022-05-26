// b) basta utilizar o comando no terminal: tsc index4.ts ("index4.ts" pois é o nome do arquivo que eu defini)

// c) Neste caso, seria necessario informar o caminho para que o terminal fosse capaz de encontrar o arquivo que queremos,
// sendo assim, o comando ficaria: tsc src/index4.ts

// d) Neste caso, basta apenas digitar o comando "tsc" que ele vai fazer o processo para todos os arquivos ts daquela pasta.

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}