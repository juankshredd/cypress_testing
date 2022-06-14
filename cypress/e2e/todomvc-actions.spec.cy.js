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
    cy.get('.toggle').should('not.be.checked')
  })

  it('should mark a todo as complete', ()=>{
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked')
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  })

  it('should clear completed todos', function(){
    cy.contains('Clear completed').click() // get a component based in its text content
    cy.get('.todo-list').should('not.have.descendants', 'li')
  })
})




