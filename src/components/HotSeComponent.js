import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HOTITEMS } from '../shared/hotitems';
import { IoChevronBackOutline } from "react-icons/io5";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';

class Hotse extends Component  {
    

    constructor(props) {
        super(props);
        //console.log('hotttt'+this.props.category);
        this.state = {
          hotitems: HOTITEMS,
          category: this.props.category
        };
    }

    render() {
        var hotitems1;
        
        if((this.props.category === 'College') || (this.props.category === 'Popular')|| (this.props.category === 'Museum')|| (this.props.category === 'Beaches'))
        {
            hotitems1 = this.state.hotitems.filter(item => item.SubCategory === this.props.category);
        }
        else
        {
            hotitems1 = this.state.hotitems;
        }
        //console.log('hot'+this.props.category);
        const menu = hotitems1.map((item) => {
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

export default Hotse;