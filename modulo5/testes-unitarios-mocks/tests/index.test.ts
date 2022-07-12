// Exercício 2 - testando a função checkCharacter

import { checkCharacter, performAttack } from "../src/test";
import { Character } from "../src/types/types";

// // A)
// describe("Testando checkCharacter", () => {
//     test("testando enviando nome vazio", () => {

//         const character: Character = {
//             name: "", life: 1500, power: 300, defense: 150
//         }

//         const result = checkCharacter(character)

//         expect(result).toBe(false)
//     })
// })

// // B)
// describe("Testando checkCharacter", () => {
//     test("testando enviando life = 0", () => {

//         const character: Character = {
//             name: "Mario", life: 0, power: 300, defense: 150
//         }

//         const result = checkCharacter(character)

//         expect(result).toBe(false)
//     })
// })

// // C)
// describe("Testando checkCharacter", () => {
//     test("testando enviando power = 0", () => {

//         const character: Character = {
//             name: "Mario", life: 1500, power: 0, defense: 150
//         }

//         const result = checkCharacter(character)

//         expect(result).toBe(false)
//     })
// })

// // D)
// describe("Testando checkCharacter", () => {
//     test("testando enviando defense = 0", () => {

//         const character: Character = {
//             name: "Mario", life: 1500, power: 300, defense: 0
//         }

//         const result = checkCharacter(character)

//         expect(result).toBe(false)
//     })
// })

// // E)
// describe("Testando checkCharacter", () => {
//     test("testando enviando com valores negativos", () => {

//         const character: Character = {
//             name: "Mario", life: 1500, power: -300, defense: 100
//         }

//         const result = checkCharacter(character)

//         expect(result).toBe(false)
//     })
// })

// // F)
// describe("Testando checkCharacter", () => {
//     test("testando enviando personagem válido", () => {

//         const character: Character = {
//             name: "Mario", life: 1500, power: 300, defense: 150
//         }

//         const result = checkCharacter(character)

//         console.log(character)

//         expect(result).toBe(true)
//     })
// })

// Exercício 4

test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})

// B)

describe("Testando checkCharacter", () => {
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true
  });
});
})

// C)

describe("Testando checkCharacter", () => {
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false
  });
});
})

// Exercício 5

// A)

describe("Testando checkCharacter", () => {
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Mario",
      life: 1500,
      defense: 200,
      power: 600,
    };

    const defender: Character = {
      name: "Luigi",
      life: 1500,
      defense: 400,
      power: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
})

// B)
describe("Testando checkCharacter", () => {
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      power: 600,
    };

    const defender: Character = {
      name: "Luigi",
      life: 1500,
      defense: 400,
      power: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
})