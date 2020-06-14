function getFullName(this: { name: string, age: number }) {
    return `${this.name}`
}

// account.getFullName()


function fn<T extends { name: string, age: number }>(this: T, _field: keyof T): void {

}


let account = {
    name: 'Ihor',
    age: 34,
    surname: 'Nepipenko',
    getFullName: fn
}
account.getFullName('surname1')

class UIElement {
    addListener(_handle: (this: void, e: Event) => void) {

    }
}

class Handler {
    info: string = 'some info';

    click(this: this, _e: Event) {
        this.info = `${(_e as any).message}`
    }
}

const h = new Handler();
const el = new UIElement()

el.addListener(h.click)
