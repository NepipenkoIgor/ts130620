abstract class AbstractControl<T> {
    public abstract model: T;

    public abstract getValue(): T;


    public onFocus() {
        // common logic;
    }

    public onBlur() {
        // common logic;
    }
}


interface IDropDownModel {
    name: string,
    value: string
}


class MHDropDown extends AbstractControl<IDropDownModel[]> {
    public model = [];

    public getValue(): IDropDownModel[] {
        // some logic
        return [];
    }
}
