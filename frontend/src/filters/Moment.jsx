import React from 'react';
import moment from 'moment';

export default ({children , fromNow}) => {
    let time;
    if (fromNow) time = moment(children).fromNow();
    return (   
       <span>
            {time}
        </span>
    )
}