const myEach = function(array, callback){
    for(let item in array){
        callback(array[item])
    };
    return array;
};

const myMap = function(collection, callback){
    let newCollection = [];
    for(let item in collection){
        newCollection.push(callback(collection[item]))
    };

    return newCollection;
};

const myReduce = function(collection, callback, acc){
    let accumlator = acc;
    let singleValue = 0;
    if(Array.isArray(collection) === false){
        let array = Object.values(collection);
        if(typeof(acc) !== "undefined"){
            for(let item in array){
                let num = callback(0, array[item], array)
                singleValue = num + singleValue
            };
            
            return singleValue + accumlator;
        };
        for(let item in array){
            let num = callback(0, array[item], array)
            singleValue = num + singleValue
        };
        const subtract = callback(0, array[0], array);
        return singleValue + array[0] - subtract;
    }else{
        if(typeof(acc) !== "undefined"){
            for(let item in collection){
                let num = callback(0, collection[item], collection)
                singleValue = num + singleValue
            };

            return singleValue + accumlator;
        };
        for(let item in collection){
            let num = callback(0, collection[item], collection)
            singleValue = num + singleValue
        };
        const subtract = callback(0, collection[0], collection);

        return singleValue + collection[0] - subtract;
    };
};

const myFind = function(collection, predicate){ 
    for(let item in collection){
        if(predicate(collection[item]) === true){
            return collection[item]
        };
    };
};

const myFilter = function(collection, predicate){
    const array = []
    for(let item in collection){
        if(predicate(collection[item]) === true){
            array.push(collection[item])
        };
    };

    return array
};

const mySize = function(collection){
    let size = 0
    for(let item in collection){
        size++
    }
    return size
}

const myFirst = function(array, n){
    let newArray = [];
    if(typeof(n) !== "undefined"){
        for(let i = 0; i < n; i++){
            newArray.push(array[i])
        };
    return newArray;
    };

    return array[0];
};

const myLast = function(array, n){
    let newArray = [];
    if(typeof(n) !== "undefined"){
        for(let i = n; i > 0; i--){
            newArray.push(array[array.length-i])
        };
    return newArray;
    };

    return array[array.length-1];
}

const myKeys = function(object){
    return Object.keys(object)
}

const myValues = function(object){
    return Object.values(object)
}