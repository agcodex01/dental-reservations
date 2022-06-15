import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      name: new FormControl('', [Validators.required]),
      preferContact: new FormControl('email'),
      contactData: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  start() {
    console.log(this.infoGroup);
    localStorage.setItem('info', JSON.stringify(this.infoGroup.value));
    this.router.navigate(['tabs/tab1']);
  }
}
