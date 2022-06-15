import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  contact = 'email';
  infoGroup: FormGroup;
  constructor(private router: Router, public fb: FormBuilder) {
    this.infoGroup = this.fb.group({
      name: new FormControl(''),
      preferContact: new FormControl('email'),
      contactData: new FormControl('')
    });
  }

  ngOnInit() {
  }

  start() {
    console.log(this.infoGroup.value);
    localStorage.setItem('info', JSON.stringify(this.infoGroup.value));
    this.router.navigate(['tabs/tab1']);
  }

}
