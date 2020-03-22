import Component from '../Component.js';


class Header extends Component{
    renderHTML(){
        return /*html*/`
            <header>
                <i class="far fa-grimace" aria-hidden="true"></i>
                <h1>Image Gallery</h1>
            </header>
        `;
    }
}

export default Header;