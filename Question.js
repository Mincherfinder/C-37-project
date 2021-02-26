class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
      }

      display() {

            //give a title to your game
            this.title.html('');
            this.title.position();//give the coordinates to position on the canvas

            this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
            this.question.position(150, 80);
            this.option1.html("1: Everyone " );
            this.option1.position(150, 100);
            this.option2.html("2: Envelope" );
            this.option2.position(150, 120);
            this.option3.html("3: Estimate " );
            this.option3.position(150, 140);
            this.option4.html("4: Example" );
            this.option4.position(150, 160);

            this.input1.position();
            this.input2.position();
            this.button.position();


            this.button.mousePressed(()=>{
                this.title.hide();
                this.input1.hide();
                this.input2.hide();
                this.button.hide();

                contestant.name = this.input1.value();
                contestant.answer = this.input2.value();
                contestantCount+=1;
                contestant.index = mycontestantCount;
                contestant.update();
                contestant.updateCount(mycontestantCount);


            })
      }
}