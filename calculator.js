const calc ={};

calc.add = (x, y) =>{
    return x + y;
};

calc.min = (x, y) =>{
    return x - y;
};

calc.multiply = (x, y) =>{
    return x * y;
};

calc.div = (x, y) =>{
    if (y == 0){
        throw 'Cannot Devide by Zero!';
    }
    return x / y;
};

module.exports = calc;