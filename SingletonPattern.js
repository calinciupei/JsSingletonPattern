/**
 * Created by Calin on 19-May-16.
 *
 * Version of a singleton pattern.
 *
 * In JavaScript to add privet members and methods to singletone pattern the need to be encapsulated inside a closure.
 * The variables and method that are not encapsulated are public.
 */

var classSingleton = function(){
    //private methods and variables
    var privVar = 'This is private';

    function printPrivate(){
        console.log(privVar);
    }

    //public variables and methos that can access private fileds from class
    return{
        publicMethod: function (){
            printPrivate();
        },
        pubVar: 'This is public'
    };
};

/**
 * The example below is for instantiating the singleton only when it is needed.
 */
var SingletonPattern = (function(){
    var instantiated;

    function init(){
        //object that simulate singleton pattern
        return{
            publicMethod: function(){
                console.log("Hello World");
            },
            publicProperty: 'test'
        }
    }

    return{
        getInstance: function(){
            if(!instantiated){
                instantiated = init();
            }
            return instantiated;
        }
    }
})();

var singleton = new classSingleton();
singleton.publicMethod(); //prints out in console 'This is private'
console.log(singleton.pubVar); //prints out in console 'This is public'

SingletonPattern.getInstance().publicMethod();

singleton.printPrivate(); //prints out in console 'Uncaught TypeError: singleton.printPrivate is not a function'





