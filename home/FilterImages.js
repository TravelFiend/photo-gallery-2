import Component from '../Component.js';

class FilterImages extends Component{
    // onRender(el){

    // }

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