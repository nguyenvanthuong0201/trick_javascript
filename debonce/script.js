const initApp = ()=>{
    const button = document.querySelector('button');
    button.addEventListener('click',debounce(clickOrder,2000));
}
const clickOrder = () => console.log("Order");
document.addEventListener('DOMContentLoaded',initApp);

// debounce function
const debounce = (fn,delay) =>{
    delay = delay || 0 ;
    let timeId;
    return ()=>{
        if(timeId){
            clearTimeout(timeId);
            timeId = null;
        }
        timeId = setTimeout(()=>{
            fn();
        },delay)
    }
}
