import { Controller, Module, Get } from '@nestjs/common';

@Controller() // Decorator for the class to tell nest that this is a controller... handles and routes incoming requests
class AppRouter {
    @Get() // Anytime someone makes a get request to the root of the application, this function will be called
    getRootRoute() {
        return 'hi there!';
    }
}