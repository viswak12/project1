import React from 'react';
import data from './data.json';
import icon from './pic5.svg';
let Resume1=(props)=>{
    let info =Object.values(props.location.index.value);
    let person = data.profiles[info];
    console.log(person);
    return(
        <div className="parent">
            <div className="child1">
                <img src={icon}alt="profile"/>
                <h2> viswa </h2>
                <a href={"mailto:"+person.basics.email}className="link">{person.basics.email}</a><br></br>
                <a href={"mobile:"+person.basics.mobile}className="link">{person.basics.mobile}</a><br></br>
            </div>
            <div className="child2">
                <h3>Educational qualifications</h3><hr></hr>
                {person.education.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.degree}</h4>
                        <ul>
                            <li>{i.percentage}</li>
                            <li>{i.institute}</li>
                        </ul>
                    </div>
                ))}
                <h3> skills  </h3><hr></hr>
                {person.skills.map((x,y)=>(
                    <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div key={1} style={{display:"inline"}}>
                            <span className="skills">{k}</span>
                           </div>
                        ))}    
                
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Resume1;