import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { WINTERITEMS } from '../shared/winteritems';
import { IoChevronBackOutline } from "react-icons/io5";

class Winter extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          winteritems: WINTERITEMS
        };
    }

    render() {
        const menu = this.state.winteritems.map((item) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={item.id}>
                                      
                    <div className="row">
                                                
                            <Card>                                
                                <CardBody>
                                    <img  src={item.image} alt={item.name} style={{"border-radius": "10px",width: "400px"}}/>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"><span>Address: </span>{item.Address}</CardSubtitle>
                                    <CardText><span>Highlight: </span>{item.description}</CardText>
                                    
                                </CardBody>
                            </Card>                        
                                                
                    </div>
                </div>
            );
        });

        return(
        <div className="container">
            <div class="row mt-1" > 
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home"><span style={{"font-weight": "bold", color: "blue"}}><IoChevronBackOutline />Back</span></Link></BreadcrumbItem>
                    </Breadcrumb>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
        );
    }
}

export default Winter;