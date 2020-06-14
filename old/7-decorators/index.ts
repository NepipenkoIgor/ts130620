import { Debounce, LogToSentry, Pluck, SavePersistence } from './utils';

class SearchComponent {

    @SavePersistence
    public meta!: string;

    constructor(
        private readonly inputElement: HTMLInputElement
    ) {
        this.inputElement.addEventListener('input', this.onSearch.bind(this) as any)
        console.log('Meta', this.meta);
    }

    @Debounce(300)
    @Pluck('target', 'value')
    @LogToSentry
    public onSearch(_value: string): void {
        console.log('Value', _value)
        this.meta = _value;
    }
}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
new SearchComponent(inputEl);
