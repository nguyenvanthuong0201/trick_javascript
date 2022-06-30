const initApp = ()=>{
    const button = document.querySelector('button');
    button.addEventListener('click',throttle(clickSave,2000));
}
const clickSave = () => console.log("Save");
document.addEventListener('DOMContentLoaded',initApp);

// throttle function
const throttle = (fn,delay) =>{
    delay = delay || 0 ;
    let last = 0;
    return () => {
        const now = new Date().getTime();
        if(now - last < delay){
            return;
        }
        last = now;
        fn();
    }
}
