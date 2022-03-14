import katie from '../assets/katie.png'
import Star from '../assets/Star.png'


export function Titlecard() {
    return (
        <div className="title-container">
            <img className="title-photo" src={katie} alt="Katie Zaferes" />

            <div className="title-details">
                <div className="first">
                    <img className="title-star" src={Star} />
                    <div>5.0 (6) * USA</div>
                </div>
                <span>Life lessons with Katie Zaferes</span>
                <span> <span>From $136 </span>/ person</span>
            </div>

        </div>
    )

}