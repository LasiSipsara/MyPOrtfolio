import React from 'react'
import './Achievements.css'
import Education from '../../data/education.json'
import Extracurricular from '../../data/extracurricular.json'

const Achievements = () => {
  return (
    <div className='achievements'>

        <div className="achievements-container">

            <div id="educational" className='sub-container'>
              <h2>Education</h2>
              <div className="achieves">
                {
                    Education.map((achieve,id)=>{
                        return(
                            <div className="achievement" key={id} >
                                <p className="achieve-name">{achieve.achievement}</p>
                                <p className="place">{achieve.place}</p>
                                <p className="time">{achieve.timePeriod}</p>

                            </div>
                        );

                    })
                }
              </div>

  
            </div>

            <div  className='sub-container'>
                <h2>Volunteering</h2>
                <div className="achieves">
                {
                    Extracurricular.map((achieve,id)=>{
                        return(
                            <div className="achievement" key={id} >
                                <p className="achieve-name">{achieve.position}</p>
                                <p className="place">{achieve.organization}</p>
                                <p className="time">{achieve.timePeriod}</p>

                            </div>
                        );

                    })
                }
              </div>

            </div>
        </div>


    </div>
  )
}

export default Achievements