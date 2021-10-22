
const Token = ()=>{

    if(localStorage.getItem('userData')){
        return JSON.parse(localStorage.getItem('userData')).token; 
    }else{
            return "zzzz";        
    }

};

export default Token