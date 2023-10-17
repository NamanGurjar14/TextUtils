import React from 'react'

export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle = {
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
    // border:'2px solid',
    // borderColor:props.mode==='dark'?'white':'#042743'
  }
  return (
    <div className='container' >
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About us</h1>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item" >
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>TextUtils</strong> gives you a way to analyse be it word count or character count or case changing. 
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters.Thus it is suitable for writing text with word or character limit. 
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        This word count software works in any browsers such as Chrome, Firefox, Safari, Edge.It suits to count characters in facebook, books, blogs, excel document ,pdfs etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
