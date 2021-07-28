### Angular unit testing

Unit testing is a type of software testing where we test individual components of an application

### Jasmine and Karma

**Jasmine**: It is a testing framework for Javascript programming language that supports Behaviour Driven Development (BDD) software development practice.

**Karma**: Karma is a tool of running tests on browsers it lets us spawn browsers and run jasmine tests inside of them.


### Test functions

**TesSuite  (describe)**: We use a **describe** to start our test block with the title matching the tested component name. `describe(string, function)` function defines what we call a **Test Suite**, a collection of individual Test Specs.

**Spec (it)** : It represents a test case inside the test suite. We can define spec by calling the global Jasmine function **it**, which, like `describe` takes a string and a function. `it(string, function)` function defines an individual Test Spec, this contains one or more Test Expectations.

**Expected outcome expect()**: expect(actual) functions take a value, called an actual. An expect function is typically used alongside a matcher function. Together they return a boolean value that depicts the passing or failing of a spec.

**Matcher** : Matcher functions take a value that represents the expected value. A matcher function is chained alongside an expect function. Together they return a boolean value that depicts the passing or failing of a spec. Some examples of matchers are toBeTruthy(), toEqual(), and toContain().

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

### Test Suite in Detail

**Fixture** : Within the describe() function, we create a ComponentFixture of the TestComponent. ComponentFixture provides methods and properties that help test the functionality of a component.

### Setup and teardown

**beforeAll**: This function is called once, before all the specs in describe test suite are run.

**afterAll**: This function is called once after all the specs in a test suite are finished.

**beforeEach**: This function is called before each test specification, it function, has been run.

**afterEach**: This function is called after each test specification has been run.

### Mocking

An object under test may have dependencies on other complex objects (dependencies). To isolate the behavior of the test object we replace the other objects (dependencies) by mocks that simulate the behavior of the real objects.
In short, mocking is creating objects that simulate the behavior of real objects.

**Mocking with Spies**

A Spy is a feature of Jasmine which lets you take an existing class, function, or object and mock it in such a way that you can control what gets returned from function calls.


### Testing Asynchronous Code

**async** : The purpose of the async is to let all the possible asynchronous code to finish before continuing.

**async and whenStable** 

We wrap our test spec function in another function called async.
We place the tests we need to run after the isAuthenticated promise resolves inside this function.
This async function executes the code inside its body in a special async test zone. This intercepts and keeps track of all promises created in its body.

Only when all of those pending promises have been resolved does it then resolves the promise returned from whenStable.

**fakeAsync and tick**

Like async we wrap the test spec function in a function called fakeAsync.
We call tick() when there are pending asynchronous activities we want to complete.
Like the async function the fakeAsync function executes the code inside its body in a special fake async test zone. This intercepts and keeps track of all promises created in its body.
The tick() function blocks execution and simulates the passage of time until all pending asynchronous activities complete.



