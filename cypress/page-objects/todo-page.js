export class TodoPage {
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh') // enters the page
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")  // Enters text to the component
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText) // validate that label component has the text described Assertion
    }

    checkToggle(){

    }
}