/// <reference types="cypress"/>

import {navigate, addTodo, showAllTodos, showOnlyActiveTodos, showOnlyCompletedTodos, toggleTodo, validateNumberOfTodosShown} from "../page-objects/todo-page"

describe('filtering', function(){

    this.beforeEach(()=>{
        navigate()

        addTodo('Clean room')
        addTodo('Learn JavaScript')
        addTodo('Use Cypress')

        toggleTodo(1)
    })

    it('should filter "Active" correctly', ()=>{
        showOnlyActiveTodos()
        validateNumberOfTodosShown(2)
    })

    it('should filter "Completed" correctly', ()=>{
        showOnlyCompletedTodos()
        validateNumberOfTodosShown(1)
    })

    it('should filter "All" correctly', ()=>{
        showAllTodos()
        validateNumberOfTodosShown(3)
    })
})