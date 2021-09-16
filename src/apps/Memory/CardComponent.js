import React from "react";

export const CardComponent = ({ item, handleClick }) => {
    return (
        <div 
          className={item.styles} 
          key = {item.id} 
          onClick={() => {
          handleClick(item);
          }}
        >
        {item.state === true ?(
           <div className="content">{item.fontend}</div>
            ) : (
           <div className="content">{item.backend}</div>
        )}                 
        </div>
    );
};