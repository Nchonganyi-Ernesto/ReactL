import '../Page/homepage/styles.css';
import images from '../assets/heroimage.png';

export default function Hero() {
    return (
        <main className="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">
                    Online <span className="highlight-text">Banking Systems</span> are
                    Changing the Financial
                    Landscape
                </h1>
                <p className="hero-subtext">
                    Simplifying Spending with Interconnected
                    <br />
                    Bank Cards
                </p>
                <div className="hero-ctas">
                    <button className="cta-btn cta-primary">Get Started</button>
                    <button className="cta-btn cta-secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={images} alt="Online banking illustration" />
            </div>
        </main>
    );
}
