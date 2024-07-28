import carWashView from '../../sources/car-wash-view.jpg';
import bubbles from '../../sources/bubbles.png';

import './footer.scss';

function Footer() {
    return (
        <footer id="contacts">
            <div className="container">
                <h2>Контакти</h2>
                <div className="flex-center">
                    <div className="footer-container">

                        <img src={bubbles} alt="Бульбашки" className='footer-bg'/>

                        <div className="map square-block">
                            <iframe 
                                title="google-map" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36980.62659766697!2d30.705781046056067!3d46.45659214568177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633360f5c311f%3A0x218318b07d07467b!2z0LLRg9C70LjRhtGPINCR0LDQu9C60ZbQstGB0YzQutCwLCAxMzAsINCe0LTQtdGB0LAsINCe0LTQtdGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1suk!2sua!4v1722160248766!5m2!1suk!2sua" 
                                style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className='info'>

                            <div className="square-block">
                                <img src={carWashView} alt="Вигляд автомийки ззовні" />
                            </div>

                            <div className="blocks-container">
                                <div className='square-block'>
                                    <p>Адреса автомийки</p>
                                    <h5>місто Одеса, вулиця Балківська 130</h5>
                                </div>
                                <div className='square-block'>
                                    <p>Номер телефону</p>
                                    <h5>+380 96 725 93 91</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;