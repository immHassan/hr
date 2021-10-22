
export default function maxLength30(name){
    if(name){
        return name.length>30? true: false;
    }else{
        return false;
    }
    
}
