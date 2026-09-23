import "./style.css";

export default function Hero() {
    return (
        <div className="hero-container">
            <iframe
                className="video-background"
                src="https://www.youtube.com/embed/0bICdbnSUkw?autoplay=1&mute=1&loop=1&playlist=0bICdbnSUkw&controls=0&showinfo=0&modestbranding=1"
                title="Hero Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <div className="hero-content">
                <h1>Your Hero Title</h1>
                <p>Your hero description text goes here</p>
                <button>Get Started</button>
            </div>
        </div>
    );
}
