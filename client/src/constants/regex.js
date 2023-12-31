const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#%@^$!%*+=~?&/_`"'.\[<,>\]\\()){}|])[A-Za-z\d#%@^$!%*+=~?&/_`"'.\[<,>\]\\(){}|]{8,25}$/,
    emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/,
    // userReg = /^[a-zA-Z0-9_]{5,14}$/,
    nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    // phoneReg = /^(6\d{8}|\+?(237\d{9}|00237\d{8}))$/;
export { passReg, emailReg, nameReg }