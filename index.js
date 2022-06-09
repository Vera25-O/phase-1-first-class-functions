function receivesAFunction(callback){
   callback();
}
function returnsANamedFunction(){
    return function name(){
        return name = returnsANamedFunction();
    }
}
returnsANamedFunction(aNamedFunction)
function returnsAnAnonymousFunction(){
    return () => console.log("an anonymous function");
}