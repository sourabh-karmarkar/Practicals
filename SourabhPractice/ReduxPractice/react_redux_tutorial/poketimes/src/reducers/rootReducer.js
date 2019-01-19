const initState={
    posts:[
        {id:1,title:'Squirtle Laid an Egg',body:'lorem1'},
        {id:2,title:'Charmander Laid an Egg',body:'lorem2'},
        {id:3,title:'A Helix Fossil was Found',body:'lorem3'},
    ]
}

const rootReducer=(state=initState,action)=>{
    if(action.type==='DELETE_POST')
    {
        let newPosts=state.posts.filter((post)=>{
            return action.id!==post.id;
        });
        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer;