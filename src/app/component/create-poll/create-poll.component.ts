import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PollModel } from '../../model/pollModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  constructor(private router: Router) { }
  addChoice: boolean = false;
  countOption = 2;
  count = [1, 2];
  addChoiceError: String = "";


  form: FormGroup;



  ngOnInit() {
    this.form = new FormGroup({
      question: new FormControl(null, Validators.required),
      choice0: new FormControl(null, Validators.required),
      choice1: new FormControl(null, Validators.required),
      choice2: new FormControl(null, Validators.required),
      choice3: new FormControl(null, Validators.required),
      choice4: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      isAnonymous: new FormControl(null, Validators.required)
    })
  }

  setDisable() {

    console.log(this.form)
    for (let i=0;i<this.count.length;i++) {
      console.log("sedisable",this.form.get('choice'+i).value);
      
    }
  }


  addOption() {

    this.countOption++;
    this.count.push(this.countOption);
    // if (this.countOption > 2) {
    //   this.addChoiceError = "You can only add upto 5 choices!";
    // }

  }

  createPoll() {

    let options = [];
    options.push(this.form.value.choice1);
    options.push(this.form.value.choice2);
    options.push(this.form.value.choice3);

    if (this.form.value.choice4 != null) {
      options.push(this.form.value.choice4);
    }

    let poll = new PollModel(this.form.value.question, options);
    console.log(JSON.stringify(poll), "poll")

  }


  indexPoll() {
    this.router.navigateByUrl('/indexPoll');
  }

}
