import mountainbike from './assets/katie.png'

import str from './assets/Star.png'


export function Titlecard(props) {
    return (
        <div className="card">
            {props.openSpots && <div className='card-badge'>SOLD OUT</div>}
            <img className="title-photo" src={mountainbike} alt=""  />

            <div className="title-details">
                <div className="first">
                    <img className="title-star" src={str} alt="star" />
                    <span>{props.rating} </span>       
                    <span>({props.reviewcount})*</span>
                    <span>{props.location}</span>
                </div>
                <span>{props.title}</span>
                <span> <span>From ${props.price} </span>/ person</span>
            </div>

        </div>
    )

}