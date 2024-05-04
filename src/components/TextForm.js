import React,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick= () =>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlelowClick= () =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (e) =>{
        setText(e.target.value);
    }
    const handleSpaceremove= () =>{
        let newText=text.replace(/\s/g, "");
        setText(newText);
    }
    const resetText=()=>{
        let reset="";
        setText(reset);
    }
  const [text, setText]=useState ('');
  return (
    <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>     
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'#282e3a':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3 " onClick={handlelowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleSpaceremove}>Remove Spaces</button>
            <button className='btn btn-danger mx-3' onClick={resetText}>Reset</button></div>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summary</h2>
            <p>{(text.split(" ").filter(word => word.trim() !== "")).length} Words and {text.length} Characters</p>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>

    </>
  )
}
