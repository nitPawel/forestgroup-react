import waters from '../src/img/waters1280.jpg'
import './App.css';

function App() {
  return (
  <>
  <nav class="nav">
        <div class="nav-desktop">
            <div class="nav-logo">
                <p class="nav-text"><i class="fas fa-tree"></i>Forest</p>
            </div>
            <div class="nav-links">
                <a href="#home" class="nav-bar">Home</a>
                <a href="#about-us" class="nav-bar">O nas</a>
                <a href="#offers" class="nav-bar">Oferta</a>
                <a href="contact.html" class="nav-bar">Kontakt</a>
            </div>
            <button class="bars"><i class="fas fa-bars"></i></button>
        </div>
        <div class="nav-mobile active">
            <div class="nav-logo--mobile">
                <p class="nav-text--mobile"><i class="fas fa-tree"></i>Forest</p>
            </div>
            <div class="nav-links--mobile">
                <a href="#home" class="nav-bar--mobile">Home</a>
                <a href="#about-us" class="nav-bar--mobile">O nas</a>
                <a href="#offers" class="nav-bar--mobile">Oferta</a>
                <a href="contact.html" class="nav-bar--mobile">Kontakt</a>
            </div>
    
        </div>
    </nav>
    <header>
        <section id="home">
            <div class="hero-img">
                <div class="hero-shadow"></div>
                <div class="hero-text">
                    <p>Forest Group</p>
                    <h1>Najpiękniejszy park w Twojej okolicy!</h1>
                </div>

            </div>
        </section>
    </header>
    <main>
        <section id="about-us">
            <h2>O nas</h2>
            <div class="about-us-one">
                <div class="hero-img3"></div>
                <img src={waters} alt="mala wysepka z krzewem na wodzie"/>
                <div class="about-us-text">
                    <h3>Niezapomniane przygody</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, cumque recusandae nam assumenda
                        beatae expedita odio sed ab nesciunt ipsam ea mollitia ex odit dicta, aliquam consequatur at,
                        eveniet harum nemo. Ad voluptate iste sit. <span>www.mmcschool.pl</span></p>
                </div>
            </div>
        </section>

        <section>
            <div class="about-us-two">
                <div class="hero-img2">
                    <div class="hero-shadow"></div>
                    <div class="hero-text2">
                        <h2>Przygoda dla całej rodziny</h2>
                    </div>
                </div>
            </div>
        </section>

        <section id="offers">
            <div class="offers-text">
                <h2>oferta</h2>
                <h3>Wybierz jedną z naszych wspaniałych ofert!</h3>
            </div>
            <div class="offers-boxes">
                <div class="box">
                    <p class="box-name">Demo</p>
                    <p class="box-price">$0</p>
                    <div class="box-options">
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p class="unactive">Opcja poza pakietem</p>
                        <p class="unactive">Opcja poza pakietem</p>
                        <p class="unactive">Opcja poza pakietem</p>
                    </div>
                    <button class="box-button">Wybierz</button>
                </div>
                <div class="box">
                    <p class="box-name">Standard</p>
                    <p class="box-price">$99</p>
                    <div class="box-options">
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p class="unactive">Opcja poza pakietem</p>
                        <p class="unactive">Opcja poza pakietem</p>
                    </div>
                    <button class="box-button">Wybierz</button>
                </div>
                <div class="box">
                    <p class="box-name">Premium</p>
                    <p class="box-price">$299</p>
                    <div class="box-options">
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                        <p><i class="fas fa-check"></i>Opcja w pakiecie</p>
                    </div>
                    <button class="box-button">Wybierz</button>
                </div>
            </div>
            <div class="more-btn">
                <div class=" box-button more-btn">
                    <a href="offers.html">Więcej </a>
                </div>

            </div>
        </section>

    </main>



    <footer>
        <div class="footer-up">

            <div class="footer-logo">
                <p><i class="fas fa-tree"></i> Forest</p>
            </div>
            <div class="footer-text">
                <div class="footer-card">
                    <p>O nas</p>
                    <ul>
                        <li>Historia</li>
                        <li>Parki</li>
                        <li>Opinie</li>
                    </ul>
                </div>
                <div class="footer-card">
                    <p>Nasza firma</p>
                    <ul>
                        <li>Praca</li>
                        <li>Kadry</li>
                        <li>Zarząd</li>
                    </ul>
                </div>
                <div class="footer-card">
                    <p>Dokumenty</p>
                    <ul>
                        <li>Wnioski</li>
                        <li>Rezerwacje</li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-underline"></div>
        <div class="footer-down">
            <p><i class="far fa-copyright"> <span class="footer-year"> </span></i> Forest Group Company Ltd.</p>
        </div>

    </footer>
  
  
  
  </>
  );
}

export default App;
