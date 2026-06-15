import React from 'react'
import Card from './components/Card'
import User from './components/User'
const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2026-06-12",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2026-06-11",
    post: "React Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2026-06-10",
    post: "Software Development Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2026-06-09",
    post: "UI Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2026-06-08",
    post: "Frontend Engineer",
    tag: "Remote",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2026-06-07",
    post: "Full Stack Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2026-06-06",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2026-06-05",
    post: "Frontend Intern",
    tag: "Part Time",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "2026-06-04",
    post: "JavaScript Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2026-06-03",
    post: "Frontend Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  }
];

   

    
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem,idx){
      return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} 
        dateposted={elem.datePosted} tag1={elem.tag}  
        brandlogo={elem.brandLogo} pay={elem.pay} 
        tag2={elem.tag2}/>
      </div>
    })}
    </div> 
       
  )
}

export default App
