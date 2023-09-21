### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT stands for JSON Web Token

These tokens are used for authentication and authorization protocols in which it is safely sent to two parties.

- What is the signature portion of the JWT? What does it do?
  Essential for verifying the tokens integrity. It is what shows that the token has not been tampered with when sent to the other party

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Attackers are able to easily decode the payload and see its contents
  JWT is base64Url encoded, which is reversible transformation, and is not encrypted.

- How can you implement authentication with a JWT? Describe how it works at a high level.

1. The user typically submits credentials including their username and password to a server. This is then use to compare to a database
2. If the verication is successful, the server will generate a JWT, which can contain information of the user including user ID, roles and more. The server signs the JWT with its private key (or a secret)
3. The server sends the JWT back to the client
4. The client than stores that JWT in a HTTP cookie, local store, or session storage
5. For other requests that require authentication, the client attaches the JWT in the HTTP header
6. When receiving a request with a JWT, the server will check its integrity and tuthenticity by checking the JWT signature. If the signature doesn't verify against the server's key, the token is invalid and the request is rejected.
7. Depending if the token is authorized, then the request will be successful or denied. Some tokens have ranks including a admin can have more access to more resources

- Compare and contrast unit, integration and end-to-end tests.
  Unit test is typically used to test smaller and pieces of a applications which can include things like classes, methods, functions.

Integration test is a test used to check successful interactions between integrated components or systems to ensure they work correctly together. This can be a database and web application

End-to-end test is testing the entire application as a whole. These take longer and often from a user's perspective. A example can be when a user starts from logging in, performing some tasks and then logging out

- What is a mock? What are some things you would mock?
  Mock testing is typically used in unit test, where we use mock objects, stubs, or fakes to stimulate other parts of the system that unit interacts with ensuring the test is in isolation. Typically in unit testing

In integration and end to end testing dont use mocks as much, due to primarily focusing on real interactions between components

- What is continuous integration?
  Software development practice in which code changes happened frequenetly, and after integration to a repo, tests are run to ensure nothing being introduce will cause errors or break functionality of a applicatoin

- What is an environment variable and what are they used for?
  Environmental variable are variables used to sometimes create secret keys/passwords that can be used all throughout different files of the application and is one step higher then a global variable.
- What is TDD? What are some benefits and drawbacks?
  TDD stands for Test-Driven Development in which the idea is to write test before any actual code is implemented. The goal is to make those test successful and pass. This can take more time and longer but eventually creates a less buggy application, easier refactoring and better code quality. Drawbacks can include over emphasizing on test, incomplete test coverage and time consuming

- What is the value of using JSONSchema for validation?
  Its a tool use to validate JSON documents and data where you are able to add requirements to ensure a less buggy and validated application

- What are some ways to decide which code to test?
  Testing a entire application can be time consuming and sometimes unecessary. Testing the application main components like logging in and main functions of the application is what should be prioritized.

- What does `RETURNING` do in SQL? When would you use it?
  Typically using returning after your SQL query is used when creating or updating a item. This is where you can show the changes and return the object you updated or created

- What are some differences between Web Sockets and HTTP?

while both WebSockets and HTTP have their roles in web communication, the choice between them depends on the application's requirements. WebSockets are ideal for real-time, bidirectional interactions, while HTTP is better suited for traditional request-response interactions.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I defiantly prefer Flask or express, maybe due to the language as I prefer to use Python but debugging, errors handling and other functionality is extremely easier for myself in Flask. I had more troubles with the technology of Express and not as straight forward as Flask.
