export default function Hr({ head }) {
  return (<>
    <div
      className="hr"
      style={{
        marginTop: "40px",
        marginBottom: "40px",
        height: "2px",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
   
    </div>
       <h1>{head}</h1></>
  );
}
