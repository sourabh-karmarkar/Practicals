const {createStore} = Redux;

const initstate={
    todos:[],
    posts:[]
}

function myreducer(state=initstate,action){
    if(action.type=='ADD_TODO')
    {
        return {
            ...state,
            todos:[...state.todos,action.todo]
        }
    }
    if(action.type=='ADD_POST')
    {
        return {
            ...state,
            posts:[...state.posts,action.post]
        }
    }
    console.log(action);
    console.log(state);
}

const store=createStore(myreducer);
store.subscribe(()=>{
    console.log('state updated');
    console.log(store.getState());
});

store.dispatch({type:'ADD_TODO',todo:'Buy milk'});
store.dispatch({type:'ADD_TODO',todo:'Sleep Some More'});
store.dispatch({type:'ADD_POST',post:'Egg Hunt'});

