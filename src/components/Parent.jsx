export function Parent({children}){
    return(
        <>
        <div style={{border:"2px solid red",padding:"20px"}}>
            {children}
        </div>
        </>
    )
}