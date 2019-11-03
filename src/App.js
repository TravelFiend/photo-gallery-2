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

        const hr = document.createElement('hr');
        el.appendChild(hr);
    
        const imageList = new ImageList(props);
        el.appendChild(imageList.renderDOM());

        const footerSection = new Footer();
        el.appendChild(footerSection.renderDOM());

        const filterImages = new FilterImages({
            images: images,
            onFilter: (selection) => {
                let filteredImages;
                if (!selection || selection === 'all') {
                    filteredImages = images;
                } else {
                    filteredImages = images.filter(image => image.keyword === selection);
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });
        const main = el.querySelector('main');
        main.appendChild(filterImages.renderDOM());
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