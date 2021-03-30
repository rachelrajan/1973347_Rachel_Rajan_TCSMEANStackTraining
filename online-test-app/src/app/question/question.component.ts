import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, DoCheck {
  currentOptions: any;
  currentQuestion: any;
  questions: any;
  @Input() QIdx: any;
  @Output() answers = new EventEmitter<{user_answer: string, correct_answer: string}>();
  @Output() totalQuestions = new EventEmitter<number>();
  userAnswer: any;
  correctAnswer: any;

  constructor() { }
  
  ngOnInit(): void {
    
    this.questions = [
      {
        question: 'What is 4+7?',
        options: ['10', '9', '7', '11'],
        answer: '11'
      },
      {
        question: 'What is (4+5)*6?',
        options: ['68', '54', '45', '97'],
        answer: '54'
      },
      {
        question: 'Which country does Madeira Island belong to?',
        options: ['Greece', 'Portugal', 'Spain', 'Turkey'],
        answer: 'Portugal'
      },

      {
        question: 'Which country does the Galapagos Islands belong to?',
        options: ['Ecuador', 'Columbia', 'Peru', 'Argentina'],
        answer: 'Ecuador'
      },
      {
        question: 'Which is still one of the most expensive spices in the world?',
        options: ['Vanilla', 'Cinnamon', 'Cardamom', 'Pepper'],
        answer: 'Vanilla'
      },
      {
        question: 'What is the hottest known chili pepper in the world called',
        options: ['Trinidad moruga scorpion', 'Jalapeno', 'Carolina Reaper', 'Dragon’s Breath'],
        answer: 'Dragon’s Breath'
      },

      {
        question: 'Which spice contains hallucinogenic myristicin?',
        options: ['Parsley', 'Chives', 'Garlic', 'Thyme'],
        answer: 'Parsley'
      },
      {
        question: 'Which Cape do you pass on the maritime spice route?',
        options: ['Cape Horn', 'Cape Verde', 'Cape Comorin', 'Cape of Good Hope'],
        answer: 'Cape of Good Hope'
      },
      {
        question: 'Which countries does the Caribbean island of St. Martin belong to?',
        options: ['France', 'Madagascar', 'Canada', 'USA'],
        answer: 'France'
      },

      {
        question: 'In ancient times, a Nilometer was used to determine ...',
        options: ['The speed of the Nile', 'The Width of the Nile', 'The waterlevel of the Nile', 'The temperature of the water'],
        answer: 'The waterlevel of the Nile'
      },
     
      ];

      this.totalQuestions.emit(this.questions.length);
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.QIdx].question;
    this.currentOptions = this.questions[this.QIdx].options;
  }

  clickedAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.QIdx].answer;
    this.answers.emit({user_answer: this.userAnswer, correct_answer: this.correctAnswer});
  }

}
