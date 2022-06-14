/// <reference types="cypress" />

import {TodoPage} from "../page-objects/todo-page"

describe('Todo App From Tutorial', ()=>{
  const todoPage = new TodoPage()

  before(function(){
    todoPage.navigate()
    todoPage.addTodo("Clean room")
  })
  it('should be able to add a new todo to the list', ()=>{
    todoPage.validateTodoText(0, 'Clean room')
    todoPage.validateToggleState(0, false)
  })

  describe('toggling todos', ()=>{
    it('should mark a todo as complete', ()=>{
      todoPage.validateTodoCompletedState(0)
    })
  
    it('should clear completed todos', function(){
      todoPage.toggleTodo(0)
      todoPage.clearCompleted()
      todoPage.validateNumberOfTodosShown(0)
    })
  })
})




