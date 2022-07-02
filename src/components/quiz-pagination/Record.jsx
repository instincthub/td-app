import React from 'react'
import { clickRadio } from '../static/assets/js/quiz-test'

const Records = ({data, responseData, ...props}) => {
    
  return (  

        <div>
            {data.map(item => (
            <div>
                <p id="qtext">{item.question}</p>
                
                <form role="form" id="quizform" name="quizform" method="post">
            
                    <input type="hidden" name="starttime" value="6/30/2022 9:03:25 PM"/>
                    <input type="hidden" name="answers" />
                    <input type="hidden" name="nextnumber"/>
                    <input type="hidden" name="prevnumber" value="1"/>
                    
                    
                    <div>
                        
                        <div id="altcontainer" className="notranslate">
                        {item['q_option'].map((item, index)=> (
                            
                            <label 
                                key="{item.pk}"
                                className="radiocontainer checkedlabel" 
                                id={"label"+(index+=1)}> 

                                <span>{item.option}</span>
                                
                                <input 
                                    type="radio" 
                                    name="quiz" 
                                    id={item.pk} 
                                    onClick={(e)=>{
                                        clickRadio(e.target)
                                    }} 
                                    value={item.pk}
                                />
                                <span className="checkmark"></span>
                            </label>
                        ))}
                        </div>
                    </div>
                    
                </form>
            </div>
            ))}
        </div>
  ) 
}

export default Records  