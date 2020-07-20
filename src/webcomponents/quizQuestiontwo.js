import React from "react"



function QuizQuestion(props){
  const style = {
  fontStyle: "italic",
  backgroundColor: "#9bdeac"
}
const styleTwo = {
  fontStyle: "italic",
  backgroundColor:"#ff7c7c"


}


  return(

    <div>
    <h3 className="questions">{props.item.question}</h3>

    <div className="btncenter">
    <button className="btn" onClick={() =>props.handleChange(props.item.id)} style={
    props.item.completed? styleTwo: null}>{props.item.incorrect_answer_one}
    </button>

    <button className="btn"  onClick={() =>props.handleChange(props.item.id)} style={
    props.item.completed? style: null
  }>{props.item.correct_answer} </button>


    <button className="btn" onClick={() =>props.handleChange(props.item.id)} style={
    props.item.completed? styleTwo: null}>{props.item.incorrect_answer_two}
    </button>

    <button className= "btn" onClick={() =>props.handleChange(props.item.id)} style={
    props.item.completed? styleTwo: null}>{props.item.incorrect_answer_three}
    </button>

    </div>



    </div>





  )
}


export default QuizQuestion
