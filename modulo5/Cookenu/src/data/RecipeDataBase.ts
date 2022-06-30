import { Recipe } from "../entities/Recipies";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDatabase extends BaseDataBase {

    async createRecipe(recipe: Recipe) {
        try {
            await RecipeDatabase.connection('cookenu_recipe')
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creationDate: recipe.getCreationDate(),
                    userId: recipe.getUserId()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getRecipeById(id: string): Promise<Recipe> {
        try {
            const recipe = await RecipeDatabase
                .connection('cookenu_recipe')
                .select('id', 'title', 'description', 'creationDate')
                .where("id", id)

            return recipe[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}