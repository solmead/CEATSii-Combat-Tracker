import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@/services';
import { RegisterModel } from '../../entities';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
/** Register component*/
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    /** Register ctor */

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AuthenticationService
    ) {

    }


    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    async onSubmit():Promise<void> {
        this.submitted = true;


        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        var model = new RegisterModel();

        model.email = this.f.email.value;
        model.firstName = this.f.firstName.value;
        model.lastName = this.f.lastName.value;
        model.password = this.f.password.value;
        model.username = this.f.username.value;



        var u = await this.accountService.registerAsync(model);



        this.router.navigateByUrl("/");
    }
}