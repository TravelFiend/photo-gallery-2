import Component from '../Component.js';
import images from '../data/images.js';
import ImageList from '../home/ImageList.js';
import Header from '../home/Header.js';
import Footer from '../home/Footer.js';
import FilterImages from '../home/FilterImages.js';

class App extends Component{
    onRender(el){
        const props = { images: images };

        const header = new Header();
        el.prepend(header.renderDOM());

        const main = el.querySelector('main');
        const sorting = new FilterImages();
        const sortingDom = sorting.renderDOM();
        main.prepend(sortingDom);

        const hr = document.createElement('hr');
        el.appendChild(hr);
    
        const imageList = new ImageList(props);
        const imageListDom = imageList.renderDOM();
        el.appendChild(imageListDom);

        const footerSection = new Footer();
        el.appendChild(footerSection.renderDOM());
    }

    renderHTML() {
        return `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;