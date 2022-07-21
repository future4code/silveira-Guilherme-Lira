import { compra, isEven, UserBalance, User, Casino, verifyAge, NACIONALITY, LOCATION } from "../src/tests"

// TESTANDO

describe("Testando o arquivo index.js", () => {
    test("testando a função isEven", () => {
        expect(isEven(2)).toBe(true)
    })
})

// EXERCÍCIO 1

// A)
describe("Testando a função para fazer compras", () => {
    test("Caso com saldo maior", () => {

        const user: UserBalance = {
            name: "Jana",
            balance: 200
        }

        expect(compra(user, 100)).toEqual({
            name: "Jana",
            balance: 100
        })
    })
})

// B)
describe("Testando a função para fazer compras", () => {
    test("Caso com saldo igual", () => {

        const user: UserBalance = {
            name: "Jana",
            balance: 200
        }

        expect(compra(user, 200)).toEqual({
            name: "Jana",
            balance: 0
        })
    })
})

// C)
describe("Testando a função para fazer compras", () => {
    test("Caso com o saldo menor", () => {

        const user: UserBalance = {
            name: "Jana",
            balance: 200
        }

        expect(compra(user, 300)).not.toBeDefined()
    })
})

// EXERCÍCIO 3 / 4

// a)
describe("Testando a função do casino", () => {
    test("1 brasileiro ok", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
    })
})

// b)
describe("Testando a função do casino", () => {
    test("1 americano ok", () => {
        const brazilian: User = {
            name: "Murilo",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Balada Supimpa",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Murilo"]);
    })
})

// c)
describe("Testando a função do casino", () => {
    test("Ninguém permitido", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
            "Astrodev EUA",
            "Astrodev EUA",
        ]);
    });
})

// d)
describe("Testando a função do casino", () => {
    test("2 Americanos ok e dois brasileiros não OK", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      });
})