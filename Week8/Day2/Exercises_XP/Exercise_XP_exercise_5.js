function makeJuice(size){

    ingredients = [];
    console.log(`The juice is size ${size}`);


    function addIngredients(firstIngredient,secondIngredient,thirdIngredient){
        ingredients.push(firstIngredient,secondIngredient,thirdIngredient);
        function displayJuice(){
            console.log(`The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`);
        }
        displayJuice();
    };

    addIngredients("rhum", "whiskey", "coke");
    addIngredients("sprit", "pepsi", "Johnnie")
    
};

makeJuice("big");