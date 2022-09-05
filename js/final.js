
class final{
    constructor(correctAnswer,totalAmount){
        this.scoreElement=document.querySelector(".score") ;
        this.againBtn=document.querySelector("#again") ;
        this.render(correctAnswer,totalAmount) ;
        this.againBtn.addEventListener("click",this.startAgain) ;

    }
    startAgain(){
        location.reload() ;
    }
    render(correctAnswer,totalAmount){
        this.scoreElement.innerHTML=`you answered ${correctAnswer}out of ${totalAmount}` ;
    } ;
}
export default final;