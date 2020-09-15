import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html",
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  public contactForm: FormGroup;
  public uxMessage = '';
  public default = ' Send text'
  isCollapsed = true;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [ '', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  saveContact() {
    this.uxMessage = 'Please wait...';
    this.default = '';
    const contact = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      phoneNumber: this.contactForm.value.phoneNumber,
      company: this.contactForm.value.company,
      role: this.contactForm.value.role,
      message: this.contactForm.value.message
    }

    this.api.contact(contact)
    .subscribe(data => {
      console.log(data)
      if(data._id) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.success('Your message has been successfully sent', 'Thank you for yuor Hello!')
      }

     const errorsEmpy = {
      company: "company must not be empty",
      email: "email must not be empty",
      firstName: "FirstName must not be empty",
      lastName: "lastName must not be empty",
      message: "message must not be empty",
      phoneNumber: "phoneNumber must not be empty",
      role: "role must not be empty"
     };
       if(data.firstName === errorsEmpy.firstName) {
        this.uxMessage = '';
        this.default = 'Send text';
              return this.toastr.error('First name must not be empty', 'Empy field')
          }

          if(data.lastName === errorsEmpy.lastName) {
            this.uxMessage = '';
            this.default = 'Send text';
            return this.toastr.error('Last name must not be empty', 'Empy field')
          }

          if(data.email === errorsEmpy.email) {
            this.uxMessage = '';
            this.default = 'Send text';
            return this.toastr.error('Email must not be empty', 'Empy field')
        }

        if(data.phoneNumber === errorsEmpy.phoneNumber) {
          this.uxMessage = '';
          this.default = 'Send text';
          return this.toastr.error('Phone number must not be empty', 'Empy field')
        }

        if(data.company === errorsEmpy.company) {
          this.uxMessage = '';
          this.default = 'Send text';
          return this.toastr.error('Company must not be empty', 'Empy field')
        }

        if(data.role ===errorsEmpy.role) {
          this.uxMessage = '';
          this.default = 'Send text';
          return this.toastr.error('Role must not be empty', 'Empy field')
        }
        if(data.message === errorsEmpy.message) {
          this.uxMessage = '';
          this.default = 'Send text';
          return this.toastr.error('Company must not be empty', 'Empy field')
        }



            
           const errorsLength = {
            company: "Your company is very short",
            email: "email must be valid",
            firstName: "Your FirstName is very short",
            lastName: "Your lastName is very short",
            message: "Your message is very short",
            phoneNumber: "Your phoneNumber is very short",
            role: "Your role is very short"
           }



      if(data.firstName === errorsLength.firstName) {
        this.uxMessage = '';
        this.default = 'Send text';
            return this.toastr.error('Your First name is very short', 'Short field')
        }

        if(data.lastName === errorsLength.lastName) {
          return this.toastr.error('Your Last name is very short', 'Short field')
        }

        if(data.email === errorsLength.email) {
          this.uxMessage = '';
          this.default = 'Send text';
          return this.toastr.error('Your Email is very short', 'Short field')
      }

      if(data.phoneNumber === errorsLength.phoneNumber) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Phone number is very short', 'Short field')
      }

      if(data.company === errorsLength.company) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Company is very short', 'Short field')
      }

      if(data.role ===errorsLength.role) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Role is very short', 'Short field')
      }
      if(data.message === errorsLength.message) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Company is very short', 'Short field')
      }

      const errorsValid = {
        email: "email must be valid",
        phoneNumber: "Your phoneNumber must be valid"
      }

      if(data.role === errorsValid.email) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Your email must be valid', 'invalid data')
      }
      if(data.message === errorsValid.phoneNumber) {
        this.uxMessage = '';
        this.default = 'Send text';
        return this.toastr.error('Your Phone number must be valid', 'invalid data')
      }

    })
  }
}


