import React,{useState} from 'react'

export default function FormText(props) {
  const handleUpClick=()=>{
      //console.log("to change in upperCase "+text)
      let newText=text.toUpperCase()
      setText(newText)
  }
  const handlelowClick=()=>{
    //console.log("to change in upperCase "+text)
    let newText=text.toLowerCase()
    setText(newText)
}
const handleclrClick=()=>{
  //console.log("to change in upperCase "+text)
  let newText=''
  setText(newText)
}
   const
   handleOnChange=(event)=>{
//console.log("onChange")
    setText(event.target.value)
}
    const[text,setText]=useState("enter text here")
 // text('new text');//wrong way to set new text
  //setText('new text');//correct way to set new text
  return (
    <> 
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3"> 
 
  <textarea className="form-control" id="myBox" value={text}onChange={handleOnChange}rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>convert upper case</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>convert lower case</button>
<button className="btn btn-primary mx-2" onClick={handleclrClick}>clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary </h1>
      <p><i> {text.split(' ').length}  words and {text.length}characters</i></p>
      <p><b> {0.008*(text.split(' ').length)}minutes read</b></p>
      <h2>Preview</h2>
      <textarea className='form-conrol 'value={text}rows="4"></textarea> 
    </div>
    </>
  )
} 
