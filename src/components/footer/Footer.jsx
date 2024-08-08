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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.24039936017857!2d30.430478289977806!3d50.41439486502949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c950fbdddaef%3A0xed42277d6ef15502!2z0LLRg9C70LjRhtGPINCd0L7QstC-0L_QvtC70YzQvtCy0LAsIDk5LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1723147980866!5m2!1suk!2sua" 
                                style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className='info'>

                            <div className="square-block">
                                <img src={carWashView} alt="Вигляд автомийки ззовні" />
                            </div>

                            <div className="blocks-container">
                                <div className='square-block'>
                                    <p>Адреса автомийки</p>
                                    <h5>місто Київ, вулиця Новопольова 99</h5>
                                </div>
                                <div className='square-block'>
                                    <p>Номер телефону</p>
                                    <h5>+380 96 666 66 66</h5>
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