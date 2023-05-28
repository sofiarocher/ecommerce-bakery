import React from 'react'
import "./Cards.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Cards() {
  return (
    <div className="body">
        <div className="wrapper">
            <KeyboardArrowLeftIcon className="icon-left"/>
                <div className="carousel">
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/ac/ca/47/acca47804b852b48f7b3c7fee1e2a756.jpg" alt="" />
                </div>
            <KeyboardArrowRightIcon className="icon-right"/>
        </div>
    </div>
  )
}

export default Cards