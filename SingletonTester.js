var SingletonTest = (function(){
    function Singleton(options){
        options = options || {};
        // set name
        this.name = 'Singleton Tester';
        //set the value of x
        this.pointX = arguments.pointX || 6;
        //set the value of y
        this.pointY = arguments.pointY || 10;
    }

    var instance;

    var _static = {
        name : "Singelton tester",
        getInstance: function(options){
            if(instance === undefined){
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTest.getInstance({
    pointX: 5
});

console.log(singletonTest);