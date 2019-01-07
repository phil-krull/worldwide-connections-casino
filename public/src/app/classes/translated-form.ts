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
    form= {
       "Language": "En",
       "Void":"Void",
       "Corrected":"Corrected",
       "Payer1":"PAYER’S name, street address, city or town, province or state, country, and ZIP or foreign postal code",
       "Payer2":"PAYER’S federal identification number",
       "Payer3":"PAYER’S telephone number",
       "Winner1":"WINNER’S name",
       "Winner2":"Street address (including apt. no.)",
       "Winner3":"City or town, province or state, country, and ZIP or foreign postal code",
       "Winner4":"Province or State",
       "Winner5":"Country",
       "Winner6":"ZIP or foreign postal code",
       "Reportings1":"Reportable winnings",
       "Reportings2":"Date won",
       "Reportings3":"Type of wager",
       "Reportings4":"Federal income tax withheld",
       "Reportings5":"Transaction",
       "Reportings6":"Race",
       "Reportings7":"Winnings from identical wagers",
       "Reportings8":"Cashier",
       "Reportings9":"Winner’s taxpayer identification no",
       "Reportings10":"Window",
       "Reportings11":"First I.D.",
       "Reportings12":"Second I.D.",
       "Reportings13":"State/Payer’s state identification no.",
       "Reportings14":"State winnings",
       "Reportings15":"State income tax withheld",
       "Reportings16":"Local winnings",
       "Reportings17":"Local income tax withheld",
       "Reportings18":"Name of locality",
       "Title1":"OMB No. 1545-0238",
       "Title2":"2019",
       "Title3":"Form W-2G Certain Gambling Winnings",
       "Title4":"For Privacy Act and Paperwork Reduction Act Notice, see the",
       "Title5":"2019 General Instructions for Certain Information Returns.",
       "Title6":"File with Form 1096",
       "Title7":"Copy A For Internal Revenue Service Center",
       "Disclaimer":"Under penalties of perjury, I declare that, to the best of my knowledge and belief, the name, address, and taxpayer identification number that I have furnished correctly identify me as the recipient of this payment and any payments from identical wagers, and that no other person is entitled to any part of these payments.",
       "SignatureArrow":"Signature ▶",
       "DateArrow":" Date ▶",
       "Bottom1":"Form",
       "Bottom2":"W-2G",
       "Bottom3":"Cat. No. 10138V",
       "Bottom4":"www.irs.gov/FormW2G",
       "Bottom5":"Department of the Treasury - Internal Revenue Service"
       }

    constructor() {
        console.log(this);
        this.formFields.amount_won.value = 'Reportable Winnings';
        this.formFields.date.value = 'Date won';
        this.formFields.name.value = 'WINNERS\'s name';
        this.formFields.address.value = 'Street address';
        this.formFields.location.value = 'City, state and ZIP';
    }
}
