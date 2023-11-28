function Profile(props) {
    return (
      <img
        src={props.viteLogo}
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery(props) {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile viteLogo={props.viteLogo}/>
        <Profile viteLogo={props.reactLogo}/>
        <Profile viteLogo={props.viteLogo}/>
      </section>
    );
  }
  