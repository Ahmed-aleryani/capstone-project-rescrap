import React from 'react';

const Card=({cardTitle="Card Title",typeOfProduct="Product type",cardLocation=" Location",cardPrice="999YER",productDetailsLink="#", cardImageSrc="default", cardImageAlt="Add image source or correct Alt"})=>{

    return(
  <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  flex-col bg-white border rounded-lg overflow-hidden shadow-lg mx-12 my-2">
  <a href={productDetailsLink} target="_blank"><img className="h-40 w-full justify-self-center bg-green-400" src={cardImageSrc} alt={cardImageAlt}/></a>
      <div className="p-4">
       <a href={productDetailsLink} target="_blank"> <h4 className="mt-1 font-semibold text-lg truncate leading-5">{cardTitle}</h4></a>
        <p className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide leading-8">{typeOfProduct}</p>
        <div className="flex flex-row justify-between">
        <span className="ml-1 inline-block bg-green-500 text-white text-sm px-2 rounded-full">{cardLocation}</span> <h4 className="text-green-600">{cardPrice}</h4>
        </div>
      </div>
  </div>
  
    )
}

export default Card;