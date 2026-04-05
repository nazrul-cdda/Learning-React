function Button({onSmash, children}) {
  return(
    // <button onClick={onSmash}>
    //   {children}
    // </button>
    <button onClick={e=>{
      e.stopPropagation();
      onSmash();
    }}>
      {children}
    </button>
    );
}
export default function App() {
  return(
    <div className="Toolbar" onClick={()=> alert('Toolbar Fired!')}>
      <Button onSmash={()=>alert('playing')} >
      Play Me
      </ Button>
      <Button onSmash={()=>alert('pausing')}>
        Pause Me
      </ Button>
      <Button onSmash={()=>alert('stopping')}>
        Stop Me
      </ Button>
    </div>    
  )
}