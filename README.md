### Angular unit testing

Unit testing is a type of software testing where we test individual components of an application

### Jasmine and Karma

**Jasmine**: It is a testing framework for Javascript programming language that supports Behaviour Driven Development (BDD) software development practice.

**Karma**: Karma is a tool of running tests on browsers it lets us spawn browsers and run jasmine tests inside of them.

### TestBed

The TestBed acts as a dummy Angular Module and we can configure it like one including with a set of imports,  providers etc:

```
TestBed.configureTestingModule({
  providers: [AuthService]
});
```

### Test functions

**TesSuite  (describe)**: We use a **describe** to start our test block with the title matching the tested component name. `describe(string, function)` function defines what we call a **Test Suite**, a collection of individual Test Specs.

**Spec (it)** : It represents a test case inside the test suite. We can define spec by calling the global Jasmine function **it**, which, like `describe` takes a string and a function. `it(string, function)` function defines an individual Test Spec, this contains one or more Test Expectations.

**Expected outcome expect()**: `expect(actual)` functions take a value, called an actual. An expect function is typically used alongside a matcher function. Together they return a boolean value that depicts the passing or failing of a spec.

**Matcher** : Matcher functions take a value that represents the expected value. A matcher function is chained alongside an expect function. Together they return a boolean value that depicts the passing or failing of a spec. Some examples of matchers are `toBeTruthy()`, `toEqual()`, and `toContain()`.

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

**afterEach**: This function is called after each test specification has been run.

**beforeEach**: This function is called before each test specification, it function, has been run.

Note: We can find 2 **beforeEach** functions one with async and one without in a component.spec file. 

The first beforeEach with async is used to setup thje module and compile components. As compileComponents() is an async function returning a promise the beforeEach is marked with async. So Jasmine knows that everything has to be resolved before moving to the next step (-> here the second beforeEach). 

The second beforeEach includes synchronous code only like setting up our component so it's not marked with async.

### Mocking

An object under test may have dependencies on other complex objects (dependencies). To isolate the behavior of the test object we replace the other objects (dependencies) by mocks that simulate the behavior of the real objects.
In short, mocking is creating objects that simulate the behavior of real objects.

**Mocking with Spies**

A Spy is a feature of Jasmine which lets you take an existing class, function, or object and mock it in such a way that you can control what gets returned from function calls.


### Mock vs. Stub vs. Spy

**Mock**

Mocks are the objects that store method calls.
The main function of using mocks is that it gives full control over the behavior of the mocked objects. The mock objects are generally used for behavior verification. The term behavior means to check the correct methods and paths that are applied to the objects.
One of the essential functions of mock is, we can verify how many times a given method is called.

**Stub**

A stub is an object that resembles a real object with the minimum number of methods needed for a test. Stub always returns the predefined output regardless of the input.
To differentiate a stub from a mock, we typically only mimic the methods we are actually testing.

**Eg:**

.ts

    clickLogout() {
        ...
        this.router.navigate(['/login']);
    }
    
 .spec.ts
 
     {
          provide: Router,
          useClass: class { 
              navigate = jasmine.createSpy("navigate"); 
          }
     }
     
     it('should navigate to /login when clickLogout is fired', () => {
       let router = fixture.debugElement.injector.get(Router);
       component.clickLogout();
       expect(router.navigate).toHaveBeenCalledWith(["/login"]);
     });
     

**Spy**

Spies are known as partially mock objects. It means spy creates a partial object or a half dummy of the real object by stubbing or spying the real ones. In spying, the real object remains unchanged, and we just spy some specific methods of it.
In other words, we take the existing (real) object and replace or spy only some of its methods.


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



