import stock from '../assets/stock.png'

export function Hero() {
    return (
        <div>
            <main className="container">
                <section className="hero-container">
                    <img src={stock} alt="random-hero" />
                </section>


                <section className="text-holder">
                    <h1 className="text-1">Online Experiences</h1>

                    <p className="text-2">Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p>
                </section>
            </main>
        </div>

    )
}