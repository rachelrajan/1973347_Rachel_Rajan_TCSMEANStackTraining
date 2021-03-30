import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  currentIndex = 0;
  answers: any;
  totalQuestions: any;
  quizOver: any;
  score:number = 0;
  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  totalQuestion(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }

  prev() {
    this.currentIndex--;
  }

  next() {
    this.currentIndex++;
    this.updateScore();
  
    if (this.currentIndex === this.totalQuestions){
      this.end();
    }
  }

  recvdAnswer(receivedAnswers: any) {
    this.answers = receivedAnswers;
  }

  updateScore(){
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
    }
  }
  end(){
    this.quizOver = true;
    this.msg = 'End of Quiz! Your Score is ' + this.score + '/ ' + this.totalQuestions +'!';
    if(this.score > 7){
      this.msg = 'Passed the Quiz!'
    }
    else{
      this.msg = ', Please try again!';
    }
  }

  restart() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }
}
