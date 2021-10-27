
const Token = ()=>{
    const userData = localStorage.getItem('userData');
    if(userData){
        const parse = JSON.parse(userData);
        return  parse.token;          
    }
};

export default Token