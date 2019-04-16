import React from 'react';
import moment from 'moment';

const Moment = ({children , fromNow}) => {
    let time;
    if (fromNow) time = moment(children).fromNow();
    return (   
       <span>
            {time}
        </span>
    )
}

export default React.memo(Moment);