class questions{
    constructor(question){
        this.questionElement=document.querySelector("#questions") ;
        this.answerElement=[document.querySelector(".a1"),
        document.querySelector(".a2"),
        document.querySelector(".a3") ,
        document.querySelector(".a4")
    ]
    this.correctAnswer=question.correct_answer ;
    this.iscorrect=false ;
    this.question=question.question ;
    this.answer=[question.correctAnswer,...question.incorrect_answers]
    } ;
    answer(checkElement){
       this.iscorrect=checkElement[0].textContent=== this.correctAnswer?true:false ;
    }
    render(){
        this.questionElement.innerHTML=this.question ;
        this.answerElement.forEach((ele,i)=>{
            ele.innerHTML=`<input type="radio" name="radio">${this.answer[index]}</input>`
        })
    }
   
}
export default questions ;