export function NextButton({children,setCurrent,current,dataLength}){
    function handleClick(e){
        e.stopPropagation();
        setCurrent((current<=dataLength)?current+1:0);
        alert(current);
    }
return(
    <button onClick={handleClick}>{children}</button>
);
}