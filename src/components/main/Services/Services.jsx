import { useState, useEffect } from 'react';

import miniCarPhoto from '../../../sources/mini.png';
import sedanPhoto from '../../../sources/sedan.png';
import suvPhoto from '../../../sources/suv.png';
import busPhoto from '../../../sources/bus.png';
import arrowLeft from '../../../sources/arrow-left.svg';
import arrowRight from '../../../sources/arrow-right.svg';

function Services() {
    const carCategories = ['A', 'B', 'C', 'D'];
    const [carCategoryIndex, setCarCategoryIndex] = useState(1);
    const [activeCategory, setActiveCategory] = useState('B');

    useEffect(() => {
      setActiveCategory(carCategories[carCategoryIndex]);
    //eslint-disable-next-line
    }, [carCategoryIndex]);
    
    const handleCategoryIndexChange = (delta) => {
      setCarCategoryIndex((prevIndex) => {
        const newIndex = (prevIndex + delta + carCategories.length) % carCategories.length;
        return newIndex;
      });
    };

    const whichCarIsActive = () => {
      switch(activeCategory) {
        case 'A':
          return miniCarPhoto;
        case 'B': 
          return sedanPhoto;
        case 'C':
          return suvPhoto;
        case 'D':
          return busPhoto;
        default: {
          return;
        }
      }
    }

    return (
        <section className="container" id="services">
            <p className='services-background'>{activeCategory}</p>
            <h2>Послуги</h2>
            <div className="car-type-slider">
                <button onClick={() => handleCategoryIndexChange(-1)}><img src={arrowLeft} alt="Стрілка наліво" /></button>
                <div className="car-type-slider__main">
                    <img src={whichCarIsActive()} alt="Седан" />
                </div>
                <button onClick={() => handleCategoryIndexChange(+1)}><img src={arrowRight} alt="Стрілка направо" /></button>
            </div>
            <div className="price-table-container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Послуги</th>
                            <th>Ціна</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mainServices[activeCategory].map((service, index) => (
                            <tr key={index}>
                                <th><p>{service.name}</p></th>
                                <td>
                                    <ul>
                                    {service.services.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    </ul>
                                </td>
                                <td><p className="price">{service.price}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th><p>Додаткові послуги</p></th>
                            <th>Ціна</th>
                        </tr>
                    </thead>
                    <tbody>
                        {additionalServices[activeCategory].map((service, index) => (
                            <tr key={index}>
                                <td>{service.name}</td>
                                <td><p className="small-price">{service.price}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Services;

const mainServices = {
    A: [
      {
        name: "1 Комплекс",
        services: [
          "2-х фазна нано-мийка кузова",
          "Прибирання салону \"Експрес\"",
          "Прибирання багажника",
          "Чорніння гуми",
        ],
        price: 500,
      },
      {
        name: "2 Комплекс",
        services: [
          "2-х фазна нано-мийка кузова",
          "Прибирання салону \"Стандарт\"",
          "Прибирання багажника + хімія",
          "Кондиціонер шкіри",
          "Полірування пластикових елементів салону",
          "Чорніння гуми",
        ],
        price: 700,
      },
      {
        name: "3 Комплекс",
        services: [
          "2-х фазна нано-мийка кузова",
          "Видалення бітумних плям",
          "Твердий віск \"Soft-99 Dark black\"",
          "Прибирання салону \"Стандарт\"",
          "Прибирання багажника + хімія",
          "Кондиціонер шкіри",
          "Полірування пластикових елементів салону",
          "Чорніння гуми",
        ],
        price: 1200,
      },
    ],
    B: [
        {
          name: "1 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Експрес\"",
            "Прибирання багажника",
            "Чорніння гуми",
          ],
          price: 600,
        },
        {
          name: "2 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 800,
        },
        {
          name: "3 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Видалення бітумних плям",
            "Твердий віск \"Soft-99 Dark black\"",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 1300,
        },
      ],
      C: [
        {
          name: "1 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Експрес\"",
            "Прибирання багажника",
            "Чорніння гуми",
          ],
          price: 700,
        },
        {
          name: "2 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 900,
        },
        {
          name: "3 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Видалення бітумних плям",
            "Твердий віск \"Soft-99 Dark black\"",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 1500,
        },
      ],
      D: [
        {
          name: "1 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Експрес\"",
            "Прибирання багажника",
            "Чорніння гуми",
          ],
          price: 750,
        },
        {
          name: "2 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 1000,
        },
        {
          name: "3 Комплекс",
          services: [
            "2-х фазна нано-мийка кузова",
            "Видалення бітумних плям",
            "Твердий віск \"Soft-99 Dark black\"",
            "Прибирання салону \"Стандарт\"",
            "Прибирання багажника + хімія",
            "Кондиціонер шкіри",
            "Полірування пластикових елементів салону",
            "Чорніння гуми",
          ],
          price: 1600,
        },
      ],
  };
  
  const additionalServices = {
    A: [
      {
        name: "Полірування кузова авто (3 шари)",
        price: "від 3000",
      },
      {
        name: "Полірування пластикових елементів салону (1 елемент)",
        price: 100,
      },
      {
        name: "Полірування оптики авто (фари, фонарі)",
        price: 400,
      },
      {
        name: "Локальне полірування елементів кузова авто (1 елемент)",
        price: 300,
      },
      {
        name: "Мийка підкапотного простору",
        price: 400,
      },
      {
        name: "Хімчистка салону авто без розрбору",
        price: "від 2500",
      },
      {
        name: "Хімчистка салону авто з розбором елементів",
        price: 4000,
      },
      {
        name: "Хімчистка локальна (стеля, стійки, сидіння, килим)",
        price: "від 500",
      },
      {
        name: "Антидощ",
        price: 400,
      },
      {
        name: "Антибітум",
        price: 300,
      },
      {
        name: "Прання килимів",
        price: "80 за кв.м",
      },

    ],
    B: [
        {
          name: "Полірування кузова авто (3 шари)",
          price: "від 3500",
        },
        {
          name: "Полірування пластикових елементів салону (1 елемент)",
          price: 100,
        },
        {
          name: "Полірування оптики авто (фари, фонарі)",
          price: 400,
        },
        {
          name: "Локальне полірування елементів кузова авто (1 елемент)",
          price: 300,
        },
        {
          name: "Мийка підкапотного простору",
          price: 400,
        },
        {
          name: "Хімчистка салону авто без розрбору",
          price: "від 3000",
        },
        {
          name: "Хімчистка салону авто з розбором елементів",
          price: 4200,
        },
        {
          name: "Хімчистка локальна (стеля, стійки, сидіння, килим)",
          price: "від 650",
        },
        {
          name: "Антидощ",
          price: 400,
        },
        {
          name: "Антибітум",
          price: 400,
        },
        {
          name: "Прання килимів",
          price: "80 за кв.м",
        },
  
      ],
      C: [
        {
          name: "Полірування кузова авто (3 шари)",
          price: "від 3500",
        },
        {
          name: "Полірування пластикових елементів салону (1 елемент)",
          price: 100,
        },
        {
          name: "Полірування оптики авто (фари, фонарі)",
          price: 400,
        },
        {
          name: "Локальне полірування елементів кузова авто (1 елемент)",
          price: 300,
        },
        {
          name: "Мийка підкапотного простору",
          price: 500,
        },
        {
          name: "Хімчистка салону авто без розрбору",
          price: "від 3300",
        },
        {
          name: "Хімчистка салону авто з розбором елементів",
          price: 4200,
        },
        {
          name: "Хімчистка локальна (стеля, стійки, сидіння, килим)",
          price: 750,
        },
        {
          name: "Антидощ",
          price: 450,
        },
        {
          name: "Антибітум",
          price: 500,
        },
        {
          name: "Прання килимів",
          price: "80 за кв.м",
        },
  
      ],
      D: [
        {
          name: "Полірування кузова авто (3 шари)",
          price: "від 4000",
        },
        {
          name: "Полірування пластикових елементів салону (1 елемент)",
          price: 100,
        },
        {
          name: "Полірування оптики авто (фари, фонарі)",
          price: 400,
        },
        {
          name: "Локальне полірування елементів кузова авто (1 елемент)",
          price: 300,
        },
        {
          name: "Мийка підкапотного простору",
          price: 500,
        },
        {
          name: "Хімчистка салону авто без розрбору",
          price: "від 3500",
        },
        {
          name: "Хімчистка салону авто з розбором елементів",
          price: 4200,
        },
        {
          name: "Хімчистка локальна (стеля, стійки, сидіння, килим)",
          price: 850,
        },
        {
          name: "Антидощ",
          price: 450,
        },
        {
          name: "Антибітум",
          price: 500,
        },
        {
          name: "Прання килимів",
          price: "80 за кв.м",
        },
  
      ],
  };
  