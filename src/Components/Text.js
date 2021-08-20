import React from 'react';

const Text = ({data, headingType})=> {

    const textHeading = ()=> {
        switch(headingType) {
            case "h2": return <h2>{data.heading}</h2>;
            case "h3": return <h3>{data.heading}</h3>;
            case "h4": return <h4>{data.heading}</h4>;
            case "h5": return <h5>{data.heading}</h5>;
            case "h6": return <h6>{data.heading}</h6>;
            default: return <h1>{data.heading}</h1>
        }
    }


    return (
        <div className="textWrapper">
            {textHeading()}
            <p>{data.text}</p>
        </div>
    )
};

export default Text;