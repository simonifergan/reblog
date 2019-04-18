import React from 'react';
import moment from 'moment';

const Moment = ({children , fromNow, writtenAt}) => {
    let time;
    if (fromNow) time = moment(children).fromNow();
    else if (writtenAt) time = moment(children).format("MMM D, YYYY"); 
    return (   
       <span>
            {time}
        </span>
    )
}

export default React.memo(Moment);