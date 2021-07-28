### Angular unit testing

Unit testing is a type of software testing where we test individual components of an application

### Jasmine and Karma

**Jasmine**: It is a testing framework for Javascript programming language that supports Behaviour Driven Development (BDD) software development practice.
**Karma**: Karma is a tool of running tests on browsers it lets us spawn browsers and run jasmine tests inside of them.


### TesSuite (describe) and Spec (it)

**TesSuite**: We use a **describe** to start our test block with the title matching the tested component name. `describe(string, function)` function defines what we call a **Test Suite**, a collection of individual Test Specs.

**Spec** in Jasmine represents a test case inside the test suite. We can define spec by calling the global Jasmine function **it**, which, like **describe** takes a string and a function. `it(string, function)` function defines an individual Test Spec, this contains one or more Test Expectations

Example
```
describe("Suite Name", function() {
    it("test spec", function() {
        expect( expression ).toEqual(true);
    }); 
     it('should test if service is called', async(() => {
        mockService.methodName.and.callThrough();
        component.addWhitepaper();
        expect(mockService.methodName).toHaveBeenCalled();
  }));
});
```
### Important terminologies

**Mocking**

An object under test may have dependencies on other complex objects (dependencies). To isolate the behavior of the test object we replace the other objects (dependencies) by mocks that simulate the behavior of the real objects.
In short, mocking is creating objects that simulate the behavior of real objects.

**async**

The purpose of the async is to let all the possible asynchronous code to finish before continuing.

