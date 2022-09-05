import quiz from "./quiz.js";
class setting{
    constructor(){
        this.settingDom=document.querySelector(".setting") ;
        this.qiuzDom=document.querySelector(".quiz") ;
        this.category=document.querySelector("#category") ;
        this.nQuestion=document.querySelector("#nquestion") ;
        this.startBtn=document.querySelector("#start") ;
        this.difficulty=[document.querySelector("#easy") ,
        document.querySelector("#medium") ,
        document.querySelector("#difficult")
    ] ;
    this.startBtn.addEventListener("click",this.startQuizApp)

    } ;
    startQuizApp=async()=>{
        try{
        const amount=this.getAmount() ;
        const categoryID=this.getID();
        const difficulty=this.getDifficulty()
        const url=`https:opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}` ;
        let {results}= await this.fetchData(url) ;
        console.log(results) ;
        this.quiz=new quize(this.qiuzDom,amount,results) ;
        this.toggle()
        }
        catch(err){
            alert(err) ;
        }

    } ;
    toggle(){
        this.qiuzDom.style.display="block" ;
        this.settingDom.style.display="none" ;

    }
    getAmount(){
        if(this.nQuestion.value>0 && this.nQuestion.value<20)
        return this.nQuestion.value ;
        else
        alert("Pleaser Enter Number Of Questions") ;
    } ;
    getID(){
        return this.category.value ;
    } ;
    getDifficulty(){
        const diff =this.difficulty.filter((ele)=>ele.checked) ;
        if(diff.length===1){
            return diff[0].id ;
        }
        else{
            alert("Please Select Difficulty") ;
        }
    } ;
    fetchData= async (url)=>{
        const response= await fetch(url);
        const result= await response.json() ;
        return result ;
        
    }

}
export default setting ;