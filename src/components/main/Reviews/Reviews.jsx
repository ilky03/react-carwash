import user1 from '../../../sources/reviews/user1.png';
import user2 from '../../../sources/reviews/user2.png';
import user3 from '../../../sources/reviews/user3.png';
import arrowDown from '../../../sources/reviews/arrow-down.png';

function Reviews() {
    return (
        <section className="container" id="reviews">
            <h2>Відгуки</h2>
            <div className="reviews-container">
                <div className="reviews-block">
                    <h4>Професійний підхід до кожного клієнта</h4>
                    <p>Відвідав нещодавно дану автомийку і залишився дуже задоволений! Мій автомобіль виглядає як новий, а персонал був дуже ввічливий та професійний. Рекомендую всім, хто хоче якісне обслуговування та бездоганний результат!</p>
                    <img src={arrowDown} alt="Стрілка униз" />
                    <div className="reviews-block__profile">
                        <img src={user1} alt="Користувач 1" />   
                        <div>
                            <p>Олексій</p>
                            <span>01/06/24</span>
                        </div>
                    </div>
                </div>

                <div className="reviews-block">
                    <h4>Неймовірний результат</h4>
                    <p>Замовляла послуги детейлінгу і була приємно здивована результатом. Усі подряпини зникли, салон сяє чистотою, а аромат у салоні, як щойно її придбали. Дякую за чудову роботу та уважне ставлення до деталей!</p>
                    <img src={arrowDown} alt="Стрілка униз" />
                    <div className="reviews-block__profile">
                        <img src={user2} alt="Користувач 2" />   
                        <div>
                            <p>Анастасія</p>
                            <span>12/06/24</span>
                        </div>
                    </div>
                </div>

                <div className="reviews-block">
                    <h4>Сучасне обладнення та якісні миючі засоби</h4>
                    <p>Автомийка «2К» у місті Одеса - це справжнє відкриття для мене! Відмінна якість обслуговування, швидке виконання замовлення та привітний персонал. Мій автомобіль отримав друге життя завдяки їхнім професійним послугам. Рекомендую всім автолюбителям!</p>
                    <img src={arrowDown} alt="Стрілка униз" />
                    <div className="reviews-block__profile">
                        <img src={user3} alt="Користувач 3" />   
                        <div>
                            <p>Антон</p>
                            <span>28/07/24</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;