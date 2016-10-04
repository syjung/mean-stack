function caller(callback) {
    //...
    callback('잘하자...');
    //...
}

function callback(msg){
    console.log(msg);
}

caller(callback);
