/// <reference types="cypress" />

import {navigate, addTodo, validateTodoText, validateNumberOfTodosShown, validateTodoCompletedState, validateToggleState, clearCompleted, toggleTodo} from "../page-objects/todo-page"

describe('Todo App From Tutorial', ()=>{

  before(function(){
    navigate()
    addTodo("Clean room")
  })
  it('should be able to add a new todo to the list', ()=>{
    validateTodoText(0, 'Clean room')
    validateToggleState(0, false)
  })

  describe('toggling todos', ()=>{
    it('should mark a todo as complete', ()=>{
      validateTodoCompletedState(0)
    })
  
    it('should clear completed todos', function(){
      toggleTodo(0)
      clearCompleted()
      validateNumberOfTodosShown(0)
    })
  })
})




