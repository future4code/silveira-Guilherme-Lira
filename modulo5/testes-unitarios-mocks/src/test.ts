// Exercício 1

import { Character } from "./types/types";

export const checkCharacter = (input: Character): boolean => {

    if(!input.name || !input.life || !input.power || !input.defense){
        return false
    }

    if (input.life <= 0 || input.power <= 0 || input.defense <= 0){
        return false
    }

    return true
}

// Exercício 3

export const performAttackDirect = (attacker: Character, defender: Character) => {
    const resultCharacter1 = checkCharacter(attacker)
    const resultCharacter2 = checkCharacter(defender)

    if (resultCharacter1 === false || resultCharacter2 === false){
        return 'Invalid character'
    }

    if (attacker.power > defender.defense) {
        defender.life -= attacker.power - defender.defense;
      }
}

export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.power > defender.defense) {
      defender.life -= attacker.power - defender.defense;
    }
};
   


