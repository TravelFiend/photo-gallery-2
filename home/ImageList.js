import Component from '../Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    renderHTML(){
        return `
        <section class="images"></section>
        `;
    }
    
    onRender(dom){
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageItemDom = imageItem.renderDOM();
            dom.appendChild(imageItemDom);
        });
    }
}

export default ImageList;