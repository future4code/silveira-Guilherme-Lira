// Exercício 2 - testando a função checkCharacter

import { checkCharacter } from "../src/test";
import { Character } from "../src/types/types";

// A)
describe("Testando checkCharacter", () => {
    test("testando enviando nome vazio", () => {

        const character: Character = {
            name: "", life: 1500, power: 300, defense: 150
        }

        const result = checkCharacter(character)

        expect(result).toBe(false)
    })
})

// B)
describe("Testando checkCharacter", () => {
    test("testando enviando life = 0", () => {

        const character: Character = {
            name: "Mario", life: 0, power: 300, defense: 150
        }

        const result = checkCharacter(character)

        expect(result).toBe(false)
    })
})

// C)
describe("Testando checkCharacter", () => {
    test("testando enviando power = 0", () => {

        const character: Character = {
            name: "Mario", life: 1500, power: 0, defense: 150
        }

        const result = checkCharacter(character)

        expect(result).toBe(false)
    })
})

// D)
describe("Testando checkCharacter", () => {
    test("testando enviando defense = 0", () => {

        const character: Character = {
            name: "Mario", life: 1500, power: 300, defense: 0
        }

        const result = checkCharacter(character)

        expect(result).toBe(false)
    })
})

// E)
describe("Testando checkCharacter", () => {
    test("testando enviando com valores negativos", () => {

        const character: Character = {
            name: "Mario", life: 1500, power: -300, defense: 100
        }

        const result = checkCharacter(character)

        expect(result).toBe(false)
    })
})

// F)
describe("Testando checkCharacter", () => {
    test("testando enviando personagem válido", () => {

        const character: Character = {
            name: "Mario", life: 1500, power: 300, defense: 150
        }

        const result = checkCharacter(character)

        console.log(character)

        expect(result).toBe(true)
    })
})