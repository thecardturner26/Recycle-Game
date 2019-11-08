////////////////////variables/////////////////////////////////////

var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');



/////////////////////////////Array of questions an answers///////////////////////////
var app={
    questions:[
                {q:'Plastic bottle?',options:['Recycle','Compost','Landfill',],answer:1},

                {q:'Grocery bag ?',options:['Recycle','Compost','Landfill',],answer:1},

                {q:'Straw?',options:['Recycle','Compost','Landfill'],answer:1},

                {q:'Banana Peel?',options:['Recycle','Compost','Landfill'],answer:2},

                {q:'HW you dont wanna do?',options:['Recycle','Compost','Landfill'],answer:1},

                {q:'Cardbord cut out of John Trevolta',options:['Recycle','Compost','Landfill'],answer:1},

                {q:'Leftovers from last ',options:['Recycle','Compost','Landfill'],answer:3},

                {q:'Leafs?',options:['Recycle','Compost','Landfill'],answer:2},

        
                
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
/////////////////////////loads in first queston///////////////
              index:0,
              load:function(){
                     if(this.index<=this.questions.length-1){
                      quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                      op1.innerHTML=this.questions[this.index].options[0];
                      op2.innerHTML=this.questions[this.index].options[1];
                      op3.innerHTML=this.questions[this.index].options[2];
                         this.scoreCard();
                      }
                      else{
//////////////////////////////End title card/////////////
                      quizBox.innerHTML="You did it......!!!"      
                      op1.style.display="none";
                      op2.style.display="none";
                      op3.style.display="none";
                      btn.style.display="none";
                      }
                    },

//////////////////////next level///////////////////
                    next:function(){
                        this.index++;
                        this.load();
                    },


/////////////////////checks if its correct or if its wrong///////////////
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


///////////////////not able to click after an answer is enterd/////////////
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



////////////////////score keeping//////////////////////
                   score:0,
                   scoreCard:function(){
                       scoreCard.innerHTML=this.score+ "/" +this.questions.length;
                   }
    
              }
///////////////////////loading/////////////////////
              window.onload=app.load();


///////////////////////button funtion////////////
              function button(ele){
                       app.check(ele);
                       app.notClickAble();
              }
/////////////////////next question calling//////////////
            function  next(){
                 app.next();
                 app.clickAble();
            }   



            