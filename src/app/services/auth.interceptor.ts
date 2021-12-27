import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService:LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.loginService.getToken()
		if(token!=null){
			console.log(token)
			req = req.clone({
				setHeaders: {
					'Authorization': `Bearer ${token}`
				},
			});
		}
		return next.handle(req);
    }

}