const ADD_ACCOUNT = "ADD_ACCOUNT";
const UPDATE_NEW_ACCOUNT = "UPDATE_ACCOUNT"
const LOGIN = "LOGIN";

const initialState = {
    accounts: [
        {
            id:1,
            name:"Renata",
            email: "renatakov1010@gmail.com",
            password: "Admin1234@",
            address: "Kingston 12, United States"
        },
        {
            id:2,
            name:"John",
            email: "john123@gmail.com",
            password: "qwerty345",
            address: "Wall Street, London"
        }
    ],
    newAcconut:{
        id: null,
        name:'',
        email:'',
        password:'',
        address: ''
    }
};

const addAccount = (state) => {
    console.log(state)
    return{
       ...state,
        accounts:[
            ...state.accounts,
            {...state.newAcconut}
        ],
        newAcconut:{
            id: null,
            name:'',
            email:'',
            password:'',
            address: ''
        }
    }
}

const updateNewAccount = (state, action) => {
    console.log(action)
    if(action.inputForm === "inputName"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,
                    id: state.accounts[state.accounts.length - 1].id + 1,
                    name: action.inputValue
                    
                }
        }
    }
    if(action.inputForm === "inputEmail"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,

                    id: state.accounts[state.accounts.length - 1].id + 1,
                    email: action.inputValue
                }
        }
    }
    if(action.inputForm === "inputPassword"){
        return{
            ...state,
                
                newAcconut:{
                    ...state.newAcconut,

                    id: state.accounts[state.accounts.length - 1].id + 1,
                    password: action.inputValue
                }
        }
    }
}

export const authorizationReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ACCOUNT:{
            return addAccount(state)
        }
        case UPDATE_NEW_ACCOUNT:{
            return updateNewAccount(state, action)
        }
        default:{
            return state
        }
    }
}

export const addAccountAC = (accountName, accountEmail, accountPassword) => 
(
    {
        type: ADD_ACCOUNT,
        accountName,
        accountEmail,
        accountPassword
    }

)

export const updateNewAccountAC = (inputForm, inputValue) => 
(
    {
        type: UPDATE_NEW_ACCOUNT,
        inputForm,
        inputValue
    }
)