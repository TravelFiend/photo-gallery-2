// import FilterImages from './FilterImages.js';
import Component from '../Component.js';
import images from '../data/images.js';
import ImageList from '../home/ImageList.js';
console.log('hi');

class App extends Component{
    onRender(dom){
        const props = { images: images };
    

        const imageList = new ImageList(props);
        const imageListDom = imageList.renderDOM();
        // const p = document.createElement('p');
        // p.textContent = 'hi again';

        // const imageSection = document.querySelector('.images');
        dom.appendChild(imageListDom);
    }

    renderHTML() {
        return `
            <div>
                <main>
                    <section class="options-section"></section>
                </main>
            </div>
        `;
    }
}

export default App;