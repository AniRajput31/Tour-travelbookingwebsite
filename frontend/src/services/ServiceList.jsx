import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from'../assets/images/weather.png'
import guideImg from'../assets/images/guide.png'
import customizationImg from'../assets/images/customization.png'

const servicesData =[
{
    imgUrl: weatherImg,
    title:"Calculate Weather",
    desc:"lorem ipsum dolor sit amet,connection adapitabilty elite.",
},
{
    imgUrl: guideImg,
    title:"Best Tour Guide",
    desc:"lorem ipsum dolor sit amet,connection adapitabilty elite.",
},
{
    imgUrl: customizationImg,
    title:"Customization",
    desc:"lorem ipsum dolor sit amet,connection adapitabilty elite.",
},
]
const ServiceList = () => {
  return (<>
  {servicesData.map((item,index)=>(
    <Col lg="3" key={index}>
        <ServiceCard item={item} />
    </Col>

  ))}
  </>
  );
}

export default ServiceList
