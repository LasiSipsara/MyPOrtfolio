import React from 'react'
import Skills from '../../data/skills.json'
import './Experience.css'



const Experience = () => {
  return (
   <div id='skills' className='experience'>
    <h1>Technical Skills</h1>
    
    <div className='skills-section'>
        {
            Skills.map((skill,id)=>{
                
                return(
                    <div className='skill-item' key={id}>
                        <div className='skill-img'>
                            <img src={skill.imgPath} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>

                    </div>
                );
                   
                }
            )
            
            
        }
    </div>
    


   </div>
  );
}

export default Experience