import airbnb from './assets/airbnb.png'


export function Navbar() {
    return (
        <nav className="Header">
            <img className="logo" alt="airbnb logo" src={airbnb} />
        </nav>

    )
}