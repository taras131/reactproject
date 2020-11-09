const ADDPOST = 'ADDPOST',
      INPUTPOST = `INPUTPOST`;

const initialstate = {
    postData: [
        {id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
        {id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
        {id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
    ],
    
    inputValue : ``
}

const profileReducer = (state = initialstate , action) => {
    debugger
    switch(action.type) {
        case ADDPOST:
           { let newPost = {
                id:11,
                text: state.inputValue,
                likescount: 0           
                }
            let statecopy = {...state};
            statecopy.postData = [...state.postData]
            statecopy.postData.unshift(newPost);
            statecopy.inputValue = ``;	
            return statecopy; }
        case INPUTPOST:
           {let statecopy = {...state};
            statecopy.inputValue = state.inputValue;
            statecopy.inputValue = action.postimput;
            return statecopy; }
        default:
            return state; 
    }
}

export const addPostActionCreater = () => ({

	type: ADDPOST
})

export const inputActionCreater = (text) => {
	return {
		type: INPUTPOST,
		postimput: text
	}
}


export default profileReducer;