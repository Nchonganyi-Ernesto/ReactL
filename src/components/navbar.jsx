import '../Page/homepage/styles.css'

export default function Navbar(){
    return(
<nav className= "navbar-container">
    <div className="nav-logo">
        BankFlow
    </div>    
    <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>services</li>
        <li>contact</li>    
    </div>
    <div className="auth-buttons">
        <button>sign in</button>
        <button>get started</button>
    </div>
</nav>
    );
}