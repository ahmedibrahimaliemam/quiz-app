import Final from "./final.js";
import Questions from "./questions.js";
class quiz{
    constructor(quizeElement,amount,questions){
        this.quizeElement=quizeElement ;
        this.currentElement=document.querySelector(".current") ;
        this.totalElement=document.querySelector(".total") ;
        this.finalElement=document.querySelector(".final") ;
        this.nextBtn=document.querySelector(".#next") ;
        this.totalAmount=amount ;
        this.answerAmount=0 ;
        this.questions=this.setQuestions(question) ;
        this.nextBtn.addEventListener("click",this.nextQuestions)
        this.renderQuestions() ;

    }
    setQuestions(question){
        return questions.map((ele)=>new questions(question))
    }
    renderQuestions(){
        this.questions[this.answerAmount].render() ;
        this.currentElement.innerHTML=this.answerAmount ;
        this.totalAmount.innerHTML=this.totalAmount ;

    } ;
    nextQuestions=()=>{
        let checkElement=this.questions[this.answerAmount].answerElement.filter((item) =>item.firstChild.checked );
        if(checkElement==0){
            alert("check element") ;
        }
        else{
            this.questions[this.answerAmount].answer(checkElement) ;
            this.answerAmount++ ;
            this.answerAmount<this.totalAmount ? this.renderQuestions():this.endQuizApp() ;
        }

    }
    endQuizApp(){
        this.quizeElement.style.dispaly="none" ;
        this.finalElement.style.dispaly="block" ;
        const correct=this.countCorrectAnswers() ;
        new final(correct,this.totalAmount) ;

    }
    countCorrectAnswers(){
        let count=0 ;
        this.questions.forEach(element => {
            if(element.iscorrect){
                count++


            }
    })

}}
export default quiz;
