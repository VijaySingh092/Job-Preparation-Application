import React from 'react'
import "../style/home.scss"

const Home = () => {
  return (
    <main className='home'>
        <div className="interview-input-group">
        <div className="left">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea 
            name="job-description" 
            id="jobDescription" 
            placeholder='Enter your job description here......'>
            </textarea>
            </div>
            <div className="right">
                <div className='input-group'>
                    <p>Resume <small className='highlight'>(Use Resume and self description together for best result )</small></p>
                    <label className='file-label' htmlFor="resume">Upload resume</label>
                    <input hidden type="file" name='resume' id='resume' accept='.pdf'/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="selfDescription">Self Description</label>
                        <textarea name="selfDescription" id="selfDescription" placeholder='Describe yourself in a few sentences....'></textarea>
                    </div>
                    <div className="button primary-button">Generate Interview Report</div>
                    </div>
                    </div>
    </main>
  )
}


export default Home
