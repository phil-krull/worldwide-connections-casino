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
    form = {
       "Language": "En",
       "fields": {
           "english": {
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
                "Title1": "OMB No. 1545-0238 \n 2019 \n Form W-2G \n Certain \n Gambling \n Winnings",
                "Title2": "",
                "Title3": "",
                "Title4": "For Privacy Act and \n Paperwork Reduction\n Act\n Notice, see the 2019\n General\n Instructions for\n Certain Information\n Returns.",
                "Title5": "",
                "Title6": "File with Form 1096",
                "Title7": "Copy A \n For Internal Revenue \n Service Center",
                "Disclaimer":"Under penalties of perjury, I declare that, to the best of my knowledge and belief, the name, address, and taxpayer identification number that I have furnished correctly identify me as the recipient of this payment and any payments from identical wagers, and that no other person is entitled to any part of these payments.",
                "Signature":"Signature ▶",
                "Date":" Date ▶",
                "Bottom1":"",
                "Bottom1a":"Form W-2G",
                "Bottom2":"Cat. No. 10138V",
                "Bottom3":"www.irs.gov/FormW2G",
                "Bottom4":"Department of the Treasury - Internal Revenue Service",
                "SignatureButton1": "Save",
                "SignatureButton2": "Clear signature",
                "SaveButton": "Submit",
                "ClearButton": "Clear form"
            },
            "french": {
                "Void": "NUL",
                "Corrected": "RECTIFIER ",
                "Payer1": "Nom du PAYEUR, adresse municipale, ville ou village, province ou état fédéral, pays et code postal ou code postal étranger.",
                "Payer2": "Numéro d'identification fédéral du PAYEUR",
                "Payer3": "Numéro de téléphone du PAYEUR",
                "Winner1": "Nom du GAGNANT",
                "Winner2": "Adresse municipale (y compris le numéro d'appartement)",
                "Winner3": "Ville ou village, province ou état fédéral, pays et code postal ou code postal étranger",
                "Reportings1": "Gains à déclarer",
                "Reportings2": "Date du gain",
                "Reportings3": "Type de pari",
                "Reportings4": "Retenue d'impôt fédéral sur le revenu",
                "Reportings5": "Transaction",
                "Reportings6": "Race",
                "Reportings7": "Gains de paris identiques",
                "Reportings8": "Caissier",
                "Reportings9": "Numérod'identification du contribuable gagnant",
                "Reportings10": "Fenêtre",
                "Reportings11": "Première pièce d'identité",
                "Reportings12": "Deuxième pièce d'identité",
                "Reportings13": "État/Numéro d'identification d'État du payeur",
                "Reportings14": "Gains d’État fédéral",
                "Reportings15": "Impôt d’ État fédéral sur le revenu,retenu à la source",
                "Reportings16": "Gains locaux",
                "Reportings17": "Impôt local retenu à la source",
                "Reportings18": "Nom de la localité",
                "Title1": "OMB No. 1545-0238 Formulaire W-2G  Gains de Jeu spécifiques ",
                "Title2": "",
                "Title3": "",
                "Title4": "Pour les avis relatifs à la Loi sur la protection des données personnelles et à la Loi sur la réduction de la paperasserie, voir le site Web Instructions générales pour certaines déclarations de données 2019",
                "Title5": "",
                "Title6": "à soumettre avec formulaire 1096",
                "Title7": "Copie A pour l'Internal Revenue Service Center",
                "Disclaimer": "Sous peine de parjure, je déclare qu'à ma connaissance, le nom, l'adresse et le numéro d'identification du contribuable que j'ai fournis m'identifient correctement comme bénéficiaire de ce paiement et de tout paiement provenant de paris identiques, et qu'aucune autre personne n'a droit à une partie quelconque de ces paiements.",
                "Signature": "Signature ▶",
                "Date": "Date ▶",
                "Bottom1":"	",
                "Bottom1a": "Formulaire  W-2G",
                "Bottom2": "Cat. No. 10138V",
                "Bottom3": "www.irs.gov/FormW2G",
                "Bottom4": "Département du Trésor - Internal Revenue Service",
                "SignatureButton1": "Sauvegarder",
                "SignatureButton2": "Effacer la signature",
                "SaveButton": "Submit",
                "ClearButton": "Clear form"
            },
            "german": {
                "Void": "UNGÜLTIG",
                "Corrected": "KORRIGIERT",
                "Payer1": "Name des ZAHLERS, Anschrift, Ort, Provinz oder Bundesstaat, Land und Postleitzahl oder ausländische Postleitzahl.",
                "Payer2": "PAYER-Bundesidentifikationsnummer",
                "Payer3": "PAYER-Telefonnummer",
                "Winner1": "Name des Gewinners",
                "Winner2": "Straße (einschließlich Apartment-Nr.)",
                "Winner3": "Stadt oder Stadt, Provinz oder Bundesland, Land und Postleitzahl oder ausländische Postleitzahl",
                "Winner4": "",
                "Winner5": "",
                "Winner6": "",
                "Reportings1": "Berichtspflichtige Gewinne",
                "Reportings2": "Datum gewonnen",
                "Reportings3": "Art des Einsatzes",
                "Reportings4": "Bundeseinkommensteuer einbehalten",
                "Reportings5": "Transaktion",
                "Reportings6": "Rasse",
                "Reportings7": "Gewinne aus identischen Wetten",
                "Reportings8": "Kassierer",
                "Reportings9": "Steueridentifikationsnummer des Gewinners",
                "Reportings10": "Fenster",
                "Reportings11": "Erste Identifikation",
                "Reportings12": "Zweite Identifikation",
                "Reportings13": "Landeskennziffer des Staates / Zahlers",
                "Reportings14": "Staatliche Gewinne",
                "Reportings15": "Staatliche Einkommensteuer einbehalten",
                "Reportings16": "Lokale Gewinne",
                "Reportings17": "Lokale Einkommensteuer einbehalten",
                "Reportings18": "Name des Ortes",
                "Title1": "OMB No. 1545-0238  2019 Formular W-2G Bestimmte Glücksspiel Gewinn ",
                "Title2": "",
                "Title3": "",
                "Title4": "Für Datenschutzgesetz und Reduzierung des Papierkripts Handlung Beachten Sie die 2019 Allgemeines Anweisungen für Bestimmte Informationen Kehrt zurück.",
                "Title5": "",
                "Title6": "Einreichen mit Formular 1096",
                "Title7": "Kopie A für US-Finanzamt",
                "Disclaimer": "Unter Strafe für Meineid erkläre ich, dass nach meinem besten Wissen und Gewissen der Name, die Adresse und die Steueridentifikationsnummer, die ich angegeben habe, mich als Empfänger dieser Zahlung und alle Zahlungen von identischen Wetten richtig identifiziert haben und dass keine Eine andere Person hat Anspruch auf einen Teil dieser Zahlungen.",
                "Signature": "Unterschrift ▶",
                "Date": "Datum▶",
                "Bottom1": "",
                "Bottom1a":	"Formular W-2G ",
                "Bottom2": "Cat. No. 10138V",
                "Bottom3": "www.irs.gov/FormW2G",
                "Bottom4": "Abteilung des Finanzministeriums - Internal Revenue Service",
                "SignatureButton1": "Speichern",
                "SignatureButton2": "Signatur löschen",
                "SaveButton": "Submit",
                "ClearButton": "Clear form"
            },
            "chinese": {
                "Void": "无效",
                "Corrected": "修正版 ",
                "Payer1": "付款人姓名、街道地址、城市或城镇、省或州、国家以及邮政编码或外国邮政编码 ",
                "Payer2": "付款人的联邦身份证件号码",
                "Payer3": "付款人的电话号码",
                "Winner1": "赌博收益者姓名",
                "Winner2": "街道地址(包括公寓号码)",
                "Winner3": "城市或城镇、省或州、国家、邮政编码或外国邮政编码",
                "Winner4": "",
                "Winner5": "",
                "Winner6": "",
                "Reportings1": "应申报赌博收益",
                "Reportings2": "赌博收益日期",
                "Reportings3": "赌注类型",
                "Reportings4": "预扣联邦所得税",
                "Reportings5": "交易",
                "Reportings6": "种族",
                "Reportings7": "相同赌注的收益",
                "Reportings8": "出纳员",
                "Reportings9": "收益人的纳税人识别号",
                "Reportings10": "窗口",
                "Reportings11": "第一身份证件",
                "Reportings12": "第二身份证件",
                "Reportings13": "州/付款人的州身份证件号码",
                "Reportings14": "州赌博收益",
                "Reportings15": "预扣州所得税",
                "Reportings16": "地方赌博收益",
                "Reportings17": "预扣地方所得税",
                "Reportings18": "场所名称",
                "Title1": "OMB No. 1545-0238 2019 W-2G 表格 某些 赌博 收益",
                "Title2": "",
                "Title3": "",
                "Title4": "有关隐私权保护法和减少文书工作法案通知, 参见2018年某些 税务资料申报表的 一般性说明。",
                "Title5": "",
                "Title6": "与表格1096一起提交",
                "Title7": "副本 A 供国税局中心 使用",
                "Disclaimer": "在作伪证便受处罚的前提下，我特此声明，据我所知所信，我提供的姓名、地址和纳税人识别号正确地表明了我是此笔款项以及来自相同赌注的任何款项的接收者，且无他人有权获得这些款项的任何部分。",
                "Signature": "签名",
                "Date": "日期",
                "Bottom1": "",
                "Bottom1a": "W-2G 表格",
                "Bottom2": "Cat. No. 10138V",
                "Bottom3": "www.irs.gov/FormW2G",
                "Bottom4": "Department of the Treasury - Internal Revenue Service",
                "SignatureButton1": "保存信息",
                "SignatureButton2": "删除签名",
                "SaveButton": "Submit",
                "ClearButton": "Clear form"
            },
            "spanish": {
                "Void": "INVÁLIDO",
                "Corrected": "CORREGIDO",
                "Payer1": "Nombre del PAGADOR, dirección, ciudad o pueblo, provincia o estado, país, y código postal local o extranjero.",
                "Payer2": "Número de identificación federal del PAGADOR",
                "Payer3": "Número de teléfono del PAGADOR",
                "Winner1": "Nombre del GANADOR",
                "Winner2": "Dirección postal (incluyendo no. de apto.)",
                "Winner3": "Ciudad o pueblo, provincia o estado, país, y código postal local o extranjero",
                "Winner4": "",
                "Winner5": "",
                "Winner6": "",
                "Reportings1":"Ganancias declaradas",
                "Reportings2":"Fecha de las ganancias",
                "Reportings3":"Tipo de apuesta",
                "Reportings4":"Impuesto federal sobre el ingreso retenido",
                "Reportings5":"Transacción",
                "Reportings6":"Carrera",
                "Reportings7":"Ganancias de apuestas idénticas",
                "Reportings8":"Cajero/a",
                "Reportings9":"Número de identificación fiscal del ganador.",
                "Reportings10":"Ventana",
                "Reportings11":"Primer documento de identidad",
                "Reportings12":"Segundo documento de identidad",
                "Reportings13":"No. de identificación estatal del pagador.",
                "Reportings14":"Ganancias estatales",
                "Reportings15":"Impuesto estatal sobre ingresos retenido",
                "Reportings16":"Ganancias Locales",
                "Reportings17":"Impuesto local sobre ingresos retenido",
                "Reportings18":"Nombre de la localidad",
                "Title1": "OMB No. 1545-0238\n2019\nFormulario\nW-2G\nDeterminadas\nganancias en\napuestas",
                "Title2": "",
                "Title3": "",
                "Title4": "Para el Aviso\nsobre la Ley de\nConfidencialidad de\nInformación y la Ley\nde Reducción de\nTrámites, consultar\nlas Instrucciones\nGenerales para\nDeterminadas\nDevoluciones de\nInformación\nde 2018.",
                "Title5": "",
                "Title6": "Presentar con el formulario 1096",
                "Title7": "Copia A para el\nCentro de Servicios\nde Impuestos Internos",
                "Disclaimer":"Bajo pena de perjurio, declaro que, a mi mejor saber y entender, el nombre, la dirección y el número de identificación del contribuyente que he proporcionado me identifican correctamente como el beneficiario de este pago y de cualquier pago de apuestas idénticas, y que ninguna otra persona tiene derecho a recibir parte alguna de estos pagos.",
                "Signature":"Firma ▶",
                "Date":" Fecha ▶",
                "Bottom1":"",
                "Bottom1a":"Formulario   W-2G",
                "Bottom2":"Cat. No. 10138V",
                "Bottom3":"www.irs.gov/FormW2G",
                "Bottom4":"Departamento del Tesoro – Servicio de Impuestos Internos",
                "SignatureButton1": "Save",
                "SignatureButton2": "Clear signature",
                "SaveButton": "Submit",
                "ClearButton": "Clear form"
            }
        }
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


// Title1	"OMB No. 1545-0238 \n 2019 \n Form W-2G \n Certain \n Gambling \n Winnings"

// Title2	"For Privacy Act and \n Paperwork Reduction\n Act\n Notice, see the 2019\n General\n Instructions for\n Certain Information\n Returns."

// Title3	"File with Form 1096"

// Title4	"Copy A \n For Internal Revenue \n Service Center"

// 1 = 1 2 3 
// 2 = 4 5
// 3 = 6
// 4 = 7