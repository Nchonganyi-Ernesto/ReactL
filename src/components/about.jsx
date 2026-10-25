import '../Page/homepage/styles.css';
import images from '../assets/about.png';

export default function About() {
    return (
        <section className="about-container">
            <div className="about-image">
                <img src={images} alt="Secure digital banking illustration" />
            </div>

            <div className="about-text">
                <span className="section-badge">About BankFlow</span>
                <h2 className="about-title">
                    Empowering Your <span className="highlight-text">Financial Future</span> with Modern Security
                </h2>
                <p className="about-description">
                    We are redefining online banking by pairing robust digital protection with a frictionless financial experience. From instant multi-card transactions to real-time asset tracking, we provide the dependable tools you need to grow and manage your wealth.
                </p>

                <div className="about-ctas">
                    <button className="cta-btn cta-primary">Open an Account</button>
                    <button className="cta-btn cta-secondary">Explore Security</button>
                </div>
            </div>
        </section>
    );
}