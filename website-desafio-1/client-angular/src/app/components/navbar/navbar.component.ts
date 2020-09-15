import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Francisco Inoque';
  isCollapsed = true;
  public downloadForm: FormGroup;
  public uxMessage = '';
  public default = 'Get it'
  constructor( 
   
    private formBuilder: FormBuilder,
    public location: Location,
    private api: ApiService,
    private toastr: ToastrService,
    ) {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }

  ngOnInit() {
    this.onWindowScroll(event);
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    this.downloadForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required],
      website: ['', Validators.required]
    })

  }

  downloadMyCv() {
    this.uxMessage = 'Please wait...'
    this.default = ''
    const email = {
      firstName: this.downloadForm.value.firstName,
      lastName: this.downloadForm.value.lastName,
      email:  this.downloadForm.value.email,
      company: this.downloadForm.value.company,
      role: this.downloadForm.value.role,
      website: this.downloadForm.value.website
    };
 
    this.api.downloadCV(email)
    .subscribe(data => {
      console.log(data)

      const isLength = {
              company: "Your company name is too short",
              email: "Email must be valid",
              firstName: "Your first name is too short",
              lastName: "Your last name is too short",
              role: "Your role name is too short",
              website: "Your website url  is too short",
      }
     
      if(data.success ===  'Your message sent successfully') {
        this.uxMessage = ''
        this.default = 'Get it'
            return this.toastr.success('Please check your inbox', 'Thank you!')
      }

      if(data.email === 'Email must be valid') {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Please your must be valid', 'Error!')
      }

      if(data.firstName === isLength.firstName) {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Your first name is too short', 'Error!')
      }

      if(data.lastName === isLength.lastName) {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Your last name is too short', 'Error!')
      }


     

      if(data.company === isLength.company) {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Your company name is too short', 'Error!')
      }

      if(data.role === isLength.role) {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Your role name is too short', 'Error!')
      }

      if(data.website === isLength.website) {
        this.uxMessage = ''
        this.default = 'Get it'
        return this.toastr.error('Your website url is too short', 'Error!')
      }

    })
  }
}
