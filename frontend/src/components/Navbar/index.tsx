import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    return(
        <header>

        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSmovie</h1>
            <a href="https://github.com/Uillianleal/dsmovie">
             <div className="dsmovie-contact-conteiner">
               <GithubIcon />
               <p className="dsmovie-contact-link">/devsuperiror</p>
             </div>
            </a>
            
          </div>
        </nav>
      </header>
    );
}

export default Navbar;