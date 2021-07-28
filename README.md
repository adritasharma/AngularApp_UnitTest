**Angular unit testing**

Unit testing is a type of software testing where we test individual components of an application

**Jasmine and Karma**

**Jasmine**: It is a testing framework for Javascript programming language that supports Behaviour Driven Development (BDD) software development practice.
**Karma**: Karma is a tool of running tests on browsers it lets us spawn browsers and run jasmine tests inside of them.


**Spec**

**Spec** in Jasmine represents a test case inside the test suite. We can define spec by calling the global Jasmine function **it**, which, like **describe** takes a string and a function.

Example
```
describe("Suite Name", function() {
    it("test spec", function() {
        expect( expression ).toEqual(true);
    }); 
});
```

**Mocking**

An object under test may have dependencies on other complex objects (dependencies). To isolate the behavior of the test object we replace the other objects (dependencies) by mocks that simulate the behavior of the real objects.
In short, mocking is creating objects that simulate the behavior of real objects.


