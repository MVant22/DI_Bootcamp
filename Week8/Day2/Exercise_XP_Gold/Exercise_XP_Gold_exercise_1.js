// let landscape = function() {

//     let result = "";

//     let flat = function(x) {
//         for(let count = 0; count<x; count++){
//         result = result + "_";
//         }
//     }

//     let mountain = function(x) {
//         result = result + "/"
//         for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//         }
//         result = result + "\\"
//     }

//     flat(4);
//     mountain(4);
//     flat(4)

//     return result;
// }
   
// landscape()


let landscape = () => {
    let result = "";

    let flat = (x) => {
        let mountain = (x) => {
            result = result + "/";
            for(let counter = 0; counter<x ; counter++){
                result = result + "'";
            }
        result = result + "\\";
        }
        for(let count = 0; count<x; count++){
            result = result + "_";
        }

        mountain(4);
    }

    flat(4);
    
    flat(4);

    return result;
}

landscape()