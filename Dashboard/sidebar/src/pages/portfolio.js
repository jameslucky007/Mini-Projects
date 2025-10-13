import React from 'react'

const About = () => {
  return (

    <>
            <title>Dev Map</title>
<div className='container portfolio-container'>
          
<input className="form-control" type="text" placeholder="Project Name"/>
<br />
<input className="form-control form-control-sm" type="text" placeholder="Tech Stack"/>
<br />
<input className="form-control form-control-lg" type="text" placeholder="Description"/>
<br />

<form>
  <div className="form-group">
    <label for="exampleFormControlFile1">Upload Project File</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div>
  
  <button type="submit">Submit Project</button>
</form>
</div>


  



    </>
 
    
  )
}

export default About