import React, { Fragment } from 'react'
import "./images.css";
export default function ImageList(props) {
    console.log(props.ListOfImages);
    return (
               <Fragment>
                  <div>
                      {props.ListOfImages.map((images) => (
                          <Fragment>
                              <div className="imageSection">
                                 <img src={images.urls.regular} alt={images.name}/>
                              </div>
                          </Fragment>
                      ))}
                  </div>
                </Fragment>
    )
}
