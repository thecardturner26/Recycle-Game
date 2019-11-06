

var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');




var app={
    questions:[
                {q:'plastic bottle', p: "https://i.imgur.com/nELN0Hh.png" , options:['Recycle','Compost','Landfill',],answer:1},

                {q:'Grocery bag ?',options:['Recycle','Compost','Landfill',],answer:1},

                {q:'Staw?',options:['Recycle','Compost','Landfill'],answer:1},

                
                // p.src = "https://i.imgur.com/nELN0Hh.png",
                // p.src = "https://i.imgur.com/h5hXM0P.png",
                // p.src = "https://i.imgur.com/99uKphz.jpg"


             ],
            

    //questions:[0].src = "https://i.imgur.com/nELN0Hh.png"
    // images: [
    //     p.src = "https://i.imgur.com/nELN0Hh.png",
    //     p.src = "https://i.imgur.com/h5hXM0P.png",
    //     p.src = "https://i.imgur.com/99uKphz.jpg"
    // ]

              index:0,
              load:function(){
                     if(this.index<=this.questions.length-1){
                      quizBox.innerHTML=this.index+1+". "+this.questions[this.index].p;      
                      op1.innerHTML=this.questions[this.index].options[0];
                      op2.innerHTML=this.questions[this.index].options[1];
                      op3.innerHTML=this.questions[this.index].options[2];
                         this.scoreCard();
                      }
                      else{

                      quizBox.innerHTML="Game Over......!!!"      
                      op1.style.display="none";
                      op2.style.display="none";
                      op3.style.display="none";
                      btn.style.display="none";
                      }
                    },
                    next:function(){
                       this.index++;
                       this.load();
                    },
                   check:function(ele){
                      
                            var id = ele.id.split('');
                            
                            if(id[id.length-1]==this.questions[this.index].answer){
                                this.score++;
                                ele.className="correct";
                                ele.innerHTML="Correct";
                                this.scoreCard();
                            }
                            else{
                                ele.className="wrong";
                                ele.innerHTML="Wrong";
                            }
                   },
                   notClickAble:function(){
                          for(let i=0;i<ul.children.length;i++){
                                  ul.children[i].style.pointerEvents="none";
                          }
                   },
   
                   clickAble:function(){
                          for(let i=0;i<ul.children.length;i++){
                                  ul.children[i].style.pointerEvents="auto";
                                  ul.children[i].className=''
   
                          }
                   },
                   score:0,
                   scoreCard:function(){
                       scoreCard.innerHTML=this.score+ "/" +this.questions.length;
                   }
    
              }
   
              window.onload=app.load();
   
              function button(ele){
                       app.check(ele);
                       app.notClickAble();
              }
   
            function  next(){
                 app.next();
                 app.clickAble();
            }   
