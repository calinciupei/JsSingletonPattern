# singletonPattern.js
### Examples and details about Javascript Singleton Pattern

The goal of this script is to provide an example how to implement singleton pattern in javascript.

### Singleton Pattern

Singleton pattern can be implemented by creating a class with a method that creates a new instance the class if doesn't exists and
if the event of an instance already exists will return a reference to that object.
JavaScript singletons serve as a namespace provider and isolates from global namespace to provide a single point for accesing the functions.

Example for a simple singleton pattern:

```
var classSingleton = {
    field1: "Filed1",
    field2: "Field2",
    method1: function(){
        console.log('hello!');
    }
}
```