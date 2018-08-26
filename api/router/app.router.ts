import {Router, Request, Response, NextFunction} from 'express';
//import LoggerUtil from '../logs/log';
import { EnvironmentConfig } from 'env-read';

export class APPRouter {

     router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        
        this.router.get('/get',);
        
    }

}