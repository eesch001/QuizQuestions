import React from 'react';
import quiz from "./quiz";
import QuizQuestion from "./webcomponents/quizQuestion"
import QuizQuestiontwo from "./webcomponents/quizQuestiontwo"
import QuizQuestionthree from "./webcomponents/quizQuestionthree"
import QuizQuestionfour from "./webcomponents/quizQuestionfour"
import Header from "./webcomponents/header"

class App extends React.Component{


  constructor(){
    super()
    this.state={
      character: quiz,
      answersCorrect: 0
    }

    this.handleChange=this.handleChange.bind(this)


   }
 handleChange(id){


     this.setState(prevstate => {const updateAnswers =prevstate.character.map(todo =>
       {
 /*Allow access to previous state*/
          if (todo.id === id){
            todo.completed = !todo.completed
          }



          return todo
        })
        return{
          todos: updateAnswers
        }



      })




   }

// Increases tester's score
   tallyAnswer(){

     return(

     this.setState(prevquestion => {prevquestion.answersCorrect +=1}
     )

)

   }



//    endGame(todo){
//      this.setState(prevstate => {const updateTally = prevstate.character.map(todo =>
//        {
//      if (todo.completed===todo.question.length){
//
//    }
//
//    return <h1>Congrats! You got {this.state.answersCorrect}</h1>
//
//  }
//
// )
//
// }
//











  render(){

    var first = quiz[0]
    var second = quiz[1]
    var third = quiz[2]
    var fourth = quiz[3]
    var fifth = quiz[4]
    var sixth = quiz[5]
    var seventh = quiz[6]
    var eighth = quiz[7]
    var ninth = quiz[8]
    var tenth = quiz[9]


    const quiztest = < QuizQuestion key={first.id}  item={first}
      handleChange={this.handleChange}  />
    const quiztesttwo = < QuizQuestionfour key={second.id} item={second}
      handleChange={this.handleChange}  />
    const quiztestthree = < QuizQuestiontwo key={third.id} item={third}
      handleChange={this.handleChange}  />
    const quiztestfour = < QuizQuestionthree key={fourth.id} item={fourth}
      handleChange={this.handleChange}  />
    const quiztestfive = < QuizQuestionfour key={fifth.id} item={fifth}
      handleChange={this.handleChange}  />
    const quiztestsixth = < QuizQuestiontwo key={sixth.id } item={sixth}
      handleChange={this.handleChange}  />
    const quiztestseventh = < QuizQuestion key={seventh.id}  item={seventh}
      handleChange={this.handleChange}  />
    const quiztesteighth = < QuizQuestionthree key={eighth.id} item={eighth}
      handleChange={this.handleChange}  />
    const quiztestninth = < QuizQuestionthree key={ninth.id} item={ninth}
      handleChange={this.handleChange}  />
    const quiztesttenth = < QuizQuestiontwo key={tenth.id } item={tenth}
      handleChange={this.handleChange}  />


       return(
         <div className="background">
         <Header />
        {quiztest}
        {quiztesttwo}
        {quiztestthree}
        {quiztestfour}
        {quiztestfive}
        {quiztestsixth}
        {quiztestseventh}
        {quiztesteighth}
        {quiztestninth}
        {quiztesttenth}

        </div>
       )
     }

}

export default App
















// const express = require("express");
// const https = require("https");
//
// const app = express();
//
//
// app.get("/", function(res, req){
//
// const url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"
//
// https.get(url, function(response){
//   console.log(response)
// })
//
// res.send("Server is up and running")
//
// })
//
//
// app.listen(3000, function(){
//   console.log("server is running on port 3000!")
// })
