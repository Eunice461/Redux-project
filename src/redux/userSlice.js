import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userInfo: { 
            name: "Dara", 
            email: "dara@gmail.com" 
        },
        pending:null,
        error:false,
	},
	reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        },
    },
});
export const {updateStart, updateSuccess, updateError} = userSlice.actions;
export default userSlice.reducer;



//THIS CODE BELOW IS FOR HANDLING NORMAL DATA THAT THOES NOT HAVE AN API, THE CODE ABOVE IS FOR
//INTERGRATING APIS

// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         name: "Dara",
//         email: "dara@gmail.com"
//     },
//     reducers:{
//         update: (state, action) => {
//             state.name = action.payload.name;
//             state.email = action.payload.email
//         },
//         remove: (state) => state = {}
//     },
// })
// export const {update,remove} = userSlice.actions;
// export default userSlice.reducer;
