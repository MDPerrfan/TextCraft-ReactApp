import React,{useState,useEffect} from 'react';
export default function TextForm(props) {
    const[typingSpeed,setTypingSpeed]=useState(0);
    const[startTime,setStartTime]=useState(null);
    const [text, setText]=useState ('');
    const handleUpClick= () =>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlelowClick= () =>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleSpaceremove= () =>{
        let newText=text.replace(/\s/g, "");
        setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handlePaste = async () => {
        const clipboardText = await navigator.clipboard.readText();
        setText(clipboardText);
    };
    const resetText=()=>{
        let reset="";
        setText(reset);
    }
    const handleOnChange= (e) =>{
        setText(e.target.value);
        if(!startTime){
            setStartTime(new Date());
        }
    }
    useEffect(() => {
        if (startTime) {
            const endTime = new Date();
            const totalTimeInMinutes = (endTime - startTime) / (1000 * 60); // Convert milliseconds to minutes
            const totalWords = (text.split(/\s+/).filter(word => word.trim() !== "")).length;
            const speed = Math.round(totalWords / totalTimeInMinutes);
            setTypingSpeed(speed);
        }
    }, [text, startTime]);
  return (
    <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>     
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'#282e3a':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={handlelowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={handleSpaceremove}>Remove Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3 my-3 " onClick={handlePaste}>Paste Text</button>
            <button disabled={text.length===0} className='btn btn-danger mx-3 my-3' onClick={resetText}>Reset</button>
        </div>
        <div className="d-flex">
            <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{(text.split(/\s+/).filter(word => word.trim() !== "")).length} Words and {text.length} Characters</p>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Typing Speed</h3>
                <p>{typingSpeed} WPM</p>
            </div>
        </div>         
    </>
  )
}
