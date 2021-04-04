import React from 'react';
import TicketIcon from '../../resources/images/icons/ticket.png'


// 3rd Party Components
import Button from '@material-ui/core/Button';


const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style ={{
                background: props.bck,
                color:props.color
            }}>

            <img
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            />
            Purchase Tickets
        </Button>
    );
};

export default MyButton;