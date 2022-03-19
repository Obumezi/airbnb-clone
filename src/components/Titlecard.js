import katie from './assets/katie.png'
import Star from './assets/Star.png'


export function Titlecard(props) {
    console.log(props)
    return (
        <div className="title-container">
            <img className="title-photo" src={katie} alt="Katie Zaferes" />

            <div className="title-details">
                <div className="first">
                    <img className="title-star" src={Star} alt="star" />
                    <span>{props.rating} </span>       
                    <span>({props.reviewcount})</span>
                    <span>{props.location}</span>
                </div>
                <span>{props.title}</span>
                <span> <span>From ${props.price} </span>/ person</span>
            </div>

        </div>
    )

}