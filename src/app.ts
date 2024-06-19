import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import router from './app/routes';


const app: Application = express();

//* parsers...
app.use(express.json());
app.use(cors());




//* routes...
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running!');
});



// 404 Error Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
       });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});





export default app;
