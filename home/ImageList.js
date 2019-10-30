import Component from '../Component';

class ImageItem extends Component{
    renderHtml(){
        const pic = this.props.pic;

        return `
            <div class="image">
                <h2>${pic.title}</h2>
                <img src="${pic.url}" alt="${pic.description}" title="${pic.description}">
                <p>Total Horns: <span id="horn-count">${pic.horns}</span></p>
            </div>
        `;
    }
}

export default ImageItem;