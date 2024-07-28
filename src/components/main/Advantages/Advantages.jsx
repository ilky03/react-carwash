import { FaTools, FaListUl, FaUserTie, FaSoap } from 'react-icons/fa';

import bg from '../../../sources/bg-advant.png'
function Advantages() {
    return (
        <section className="container" id="advantages">
            <div className="advantages-bg">
                <img src={bg} alt="" />
            </div>
            <h2>Переваги</h2>
            <div className="advantages-container">
                <div className="square-block">
                    <FaTools size={60} />
                    <h3>Сучасне обладнання</h3>
                    <p>Наша автомийка оснащена новітнім обладнанням, яке забезпечує ефективне та безпечне очищення вашого автомобіля.</p>
                </div>

                <div className="square-block">
                    <FaListUl size={60} />
                    <h3>Широкий спектр послуг</h3>
                    <p>Ми пропонуємо різноманітні послуги від стандартної мийки до повного детейлінгу, щоб задовольнити всі потреби наших клієнтів.</p>
                </div>

                <div className="square-block">
                    <FaUserTie size={60} />
                    <h3>Професійний підхід</h3>
                    <p>Наші спеціалісти мають великий досвід і використовують лише найкращі методи для догляду за вашим автомобілем.</p>
                </div>

                <div className="square-block">
                    <FaSoap size={60} />
                    <h3>Високоякісні миючі засоби</h3>
                    <p>Ми використовуємо тільки перевірені і екологічно чисті миючі засоби, які забезпечують бездоганну чистоту і блиск.</p>
                </div>
            </div>
        </section>
    )
}

export default Advantages;