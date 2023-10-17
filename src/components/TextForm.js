import React, { useState } from 'react'


export default function TextForm(props) {
    
    
    const handleUpClick= ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleDownClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange= (event)=>{
      
        setText(event.target.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Cleared the text","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }
    
    const[text,setText] = useState("");

    // const highlightMatchingText = (text, matchingText) => {
    //     const matchRegex = RegExp(matchingText, 'ig');
      
    //     // Matches array needed to maintain the correct letter casing
    //     const matches = [...text.matchAll(matchRegex)];
      
    //     let newText= text
    //       .split(matchRegex)
    //       .map((nonBoldText, index, arr) => (
    //         <React.Fragment key={index}>
    //           {nonBoldText}
    //           {index + 1 !== arr.length && <mark>{matches[index]}</mark>}
    //         </React.Fragment>
    //     ));
       
    //   };
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3" >

<textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'#13466a':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange}></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
{/* <div class="input-group mb-3 my-4">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={highlightMatchingText({text},"fox")}>Button</button>
</div> */}


    </div>
    <div className='container my-3 ' style={{color:props.mode==='dark'?'white':'#042743'}}>
        
        <h2>Your text summary</h2>
        <p> {text.split(' ').filter((str)=>{
             return str.length>0;
        }).length} words {text.length} characters</p>
        <p>{0.008*text.split(' ').filter((str)=>{
             return str.length>0;
        }).length} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

        
    </div>
    </>
  )
}
