import Component from '../Component.js';
import images from '../data/images.js';

class FilterImages extends Component{
    onRender(el){
        let filterList = [];
        images.forEach(image => {
            filterList.push(image.keyword);
        });
    
        let newList = filterList.filter((item, index) => filterList.indexOf(item) === index);
    
        newList.forEach(name => {
            const myDropdown = el.querySelector('select');
            const myOptions = document.createElement('option');
            myOptions.value = name;
            myOptions.textContent = name;
            myDropdown.appendChild(myOptions);
        });
    }


    renderHTML(){
        return /*html*/`
            <section class="choices">
                <label for="dropdown">Keyword
                    <select class="choice" name="dropdown"></select>
                </label>

                <div class="radButts">
                    <p>Sort By: </p>

                    <label for="titled">Title
                        <input type="radio" name="radios" id="titled">
                    </label>

                    <label for="horns">Horns
                        <input type="radio" name="radios" id="horns">
                    </label>
                </div>
            </section>
        `;
    }
}

export default FilterImages;