import { Component, OnInit } from '@angular/core';
//import { AuthorizeService, AuthenticationResultStatus } from '../authorize.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '@/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router) {

        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    async ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    async onSubmit():Promise<void> {
        this.submitted = true;

        // reset alerts on submit
        //this.alertService.clear();


        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        var user = await this.authenticationService.loginAsync(this.f.username.value, this.f.password.value);
        if (user != null) {
            this.router.navigate([this.returnUrl]);
        } else {
            this.loading = false;
            this.submitted = false;
        }
    }
}
