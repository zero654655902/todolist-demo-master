export const addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log('state')
            console.log(action.text)
            return [...state, {value:action.text,completed:false}]

        }
        case 'CHECK': {
            console.log('state1')
            console.log(state)
            const todo=state[action.text]
            todo.completed=!todo.completed
            return [...state]
        }
        case 'DELETE':{
            state.splice(action.text,1)
            return [...state]

        }

        case 'FILTER':{
            let method=action.text
            console.log('method')
            console.log(method)
            return [...state]
            let items
            switch (method){
                case "ALL":
                {
                    items=state.slice()
                    console.log('1')
                    return [...items]
                }

                case "ACTIVE":
                {
                    items=state.slice()
                    console.log('2')
                    items=items.filter(item=>item.completed)
                    return [...items]

                }
                case "COMPLETED":{
                    console.log('3')
                    items=state.slice()
                    items=items.filter(item=>!item.completed)
                    return [...items]
                }
                default:
                    return state
            }

        }

        //
        default:
            return state
    }
}