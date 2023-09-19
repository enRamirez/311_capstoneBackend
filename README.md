# 311_capstoneBackend

<!-- 

GET /recipes - This route returns an array of recipe objects that hold the id, name and description of each recipe. This route does not need any input

GET /recipes/:recipeId - This route returns a single recipe object that includes all the details of a recipe including the list of ingredients and instructions. This route takes in the recipe id as a path parameter.

POST /recipe - This route adds a new recipe to the database. It takes in the details of the recipe as input in the request body. The body of the recipe includes the name and the description of the recipe.

PUT /recipe/:recipeId - This route updates an existing recipe. It takes in the id  of the recipe to update as a path parameter, and the new recipe name and description in the request body.

DELETE /recipe/:recipeId - This route deletes an existing recipe. It takes in the id of the recipe to delete as a path parameter 

-->

Tables arent connecting to each other
    says "has no primary key"
    Why a PK?