import React , { useState }  from 'react'


export default function TextForm(props) {
  
  const handleUpclick=()=>{
    console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    
    setText(newText); 
    setText1(newText);
    props.showAlert("Converted to uppercase","success");
   
    
  }
  const handledownclick=()=>{
    // converting lowercase
    let  newText=text.toLowerCase();
    
    setText(newText); 
    setText1(newText);
    props.showAlert("Converted to Lowercase","success");
    
  }
  
  const clear1=()=>{
    
    setText(""); 
    props.showAlert("Text has been cleared","success");

  }
  const undo=()=>{
   
   
    
    setText(text1); 
    props.showAlert("Undo operation performed","success");
  }
  const handleCopy = () => {
    var text=document.getElementById("myBox");
     text.select();
    
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy function has been performed","success");
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success");
  }
  const handleonchange=(event)=>{
    console.log("uppercase was clicked");
    setText(event.target.value);
  }

  const [text,setText]= useState('Enter Text Here');
  const [text1,setText1]=useState('Enter Text Here');
  
  return (
    <>
    <div className="container" style={{color: props.Mode==='light'?'white':'Black'}}>
  <h1>{props.heading}</h1>    
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.Mode==='light'?'grey':'white' ,  color: props.Mode==='light'?'white':'Black'}}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpclick} >convert uppercase</button>

<button className="btn btn-primary mx-2 my-1" onClick={handledownclick}>convert lowercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={clear1}>clear</button> 
<button className="btn btn-primary mx-2 my-1" onClick={undo}>undo</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.Mode==='light'?'white':'Black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length-text.split(" ").length+1} characters</p>
    
    </div>
    </>
  )
}
