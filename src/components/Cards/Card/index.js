import '../style.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from "reactstrap";

const cardInfo = () => {
    return (
    
<Card className='card'> 
        <CardImg alt="Card image cap" src={props.photos_sample[0].photo_url} top className='cardImg'/>
      <CardBody>
        <CardTitle tag="h5">
           {props.name}
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         > 
          {props.subtypes}
          </CardSubtitle> 
          <CardText> 
           {/* Phone Number:{props.phone_number}<br/> */}
            Address:{props.address}, {props.city} {props.state} {props.zipcode} <br/> 
 {/* Rating:{props.rating} */}
         </CardText>
         <Button primary>
           Button
         </Button>
       </CardBody>
     </Card> 
  )
}
export default cardInfo;