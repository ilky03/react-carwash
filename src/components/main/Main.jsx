import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Advantages from './Advantages/Advantages';
import Reviews from './Reviews/Reviews';

import './main.scss';

function Main() {
    return (
        <main>
            <Services />
            <Gallery />
            <Advantages />
            <Reviews />
        </main>
    )
}

export default Main;