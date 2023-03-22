import { Controller, Get } from '@nestjs/common'; 

@Controller('/app') // Decorator for the class to tell nest that this is a controller... handles and routes incoming requests
export class AppController {
    @Get('/hi') // Anytime someone makes a get request to the root of the application, this function will be called
    getRootRoute() {
        return 'hi there!';
    }


    @Get('/bye')
    getByeThere() {
        return 'bye there!'
    }
}