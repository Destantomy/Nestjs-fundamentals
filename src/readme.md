- app.controller.ts : this file is used to handle our logic, such as request handling based on http declared. In the other word, this file becoming the bridge between routing url and data logic that directly handled from service app.
- app.controller.specs.ts : this file is used to see the result as controller running test.
- app.service.ts : this file is containing data service method based. It will make a functionality, returning something, giving back a response, then this reponse will use as a return value information while the app is running.
- app.module.ts : this file is used to compile all the parts of the module to build a complete app.
- main.ts : this file bacome the main instance of the app, where the first compiled is in 3000's port.

-> controller : it has responsibility to handling incoming request then giving the response to client. Routing mechanism in Nestjs able to determine which controller that will receive and handling incoming request. Every controller could have more than one url routes and each route could did various job. In order to make basic controller we could use class and decorator. A decorator marked with syntax @ (ex: @Controller, @Get, @Post, etc). This decorator will reference into a class with defining a required meta data which we can use it to describe data and process it into a information as return value. 
->  