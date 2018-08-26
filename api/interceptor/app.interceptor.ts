import {Request, Response, NextFunction} from 'express';
//import LoggerUtil from './../logs/log';

export class APPInterceptor {

    public beforeEachRequest(req: Request, res: Response, next: NextFunction){

        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log('APPInterceptor::request URL:::'+fullUrl+":::::with body::::"+JSON.stringify(req.body));
        next();
    }

    public afterEachRequest(req: Request, res: Response, next: NextFunction){

        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log('APPInterceptor::after request URL:::'+fullUrl+":::::DONE::::");
        next();
    }

}