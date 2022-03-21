import mountainbike from './assets/katie.png'

import str from './assets/Star.png'


export function Titlecard(props) {
    /* 
    this logic will display the open spots and location as a badge depending on the status
    of the badgeText value
     */
    let badgeText
    if (props.cards.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.cards.location === "Online") {
        badgeText = "ONLINE"
    } else badgeText = ""
    return (
        <div className="card">
            {/* this use the falsy and truthy value of badgetext
            if badge text is true of false fidplay badge text */}
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className="title-photo" src={mountainbike} alt="" />

            <div className="title-details">
                <div className="first">
                    <img className="title-star" src={str} alt="star" />
                    <span>{props.cards.stats.rating} </span>
                    <span>({props.cards.stats.reviewCount})*</span>
                    <span>{props.cards.location}</span>
                </div>
                <span>{props.cards.title}</span>
                <span> <span>From ${props.cards.price} </span>/ person</span>
            </div>

        </div>
    )

}