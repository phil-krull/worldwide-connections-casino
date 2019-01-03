class FormFieldValues {
    value: string;
    wav: any;
}

class FormFields {
    amount_won: FormFieldValues = new FormFieldValues();
    date: FormFieldValues = new FormFieldValues();
    name: FormFieldValues = new FormFieldValues();
    address: FormFieldValues = new FormFieldValues();
    location: FormFieldValues = new FormFieldValues();
}

export class TranslatedForm {
    language: string = 'English';
    formFields: FormFields = new FormFields();

    constructor() {
        console.log(this);
        this.formFields.amount_won.value = 'Reportable Winnings';
        this.formFields.date.value = 'Date won';
        this.formFields.name.value = 'WINNERS\'s name';
        this.formFields.address.value = 'Street address';
        this.formFields.location.value = 'City, state and ZIP';
    }
}
