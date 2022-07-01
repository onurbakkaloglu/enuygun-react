import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    post: false
}

 const site = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setPosts: (state, action) => {
            state.post = action.payload
        },
        setUser: (state, action) => {
            state.users = state.users.map(user => {
                if(user.id === action.payload.id){
                    return {...action.payload}
                }

                return user;
            })
        }
    }
})

export const {setUsers, setPosts, setUser} = site.actions
export default site.reducer