import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  console.log(props.company)
  return (
    <div>
       <div className="card">
        <div className="top">
          <img src="{props.brandlogo}" alt=""/>
          <button>Save<Bookmark size={12} /></button>
        </div>

        <div>
            <div className="center">
              <h3>{props.company}<span>{props.dateposted}</span></h3> 
              <h2>{props.post}</h2>
                <div className="tag">
                  <h4>{props.tag1}</h4>
                  <h2>{props.tag2}</h2>
                </div>
            </div>
        </div>
        <div className="bottom">
          <div>
              <h3>{props.pay}</h3>
              <p>Mumbai, India</p>
          </div>
           <button>Apply Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default card
