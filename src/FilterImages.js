import Component from '../Component';

class FilterImages extends Component {
    onRender(){
        const onFilter = this.props.onFilter;
        
        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHtml(){
        return `
            <select class="choice" name="dropdown"></select>
        `;
    }
}

export default FilterImages;