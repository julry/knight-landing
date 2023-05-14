const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScl3sDF-2v4gnsr8AzlvnbVMF0LywnoBr42xAzGRvncL_dPuQ/formResponse';
const NAME_ID = 'entry.637590343';
const PHONE_ID = 'entry.1483328622';
const EMAIL_ID = 'entry.1706231110';
const COMPANY_ID = 'entry.1045433932';
const POSITION_ID = 'entry.56442107';
const PARKING_ID = 'entry.219778571';

export const sendForm = ({name, phone, company, position, email, isParking}) => {
    const formData = new FormData();

    formData.append(NAME_ID, name);
    formData.append(PHONE_ID, phone);
    formData.append(EMAIL_ID, email);
    formData.append(COMPANY_ID, company);
    formData.append(POSITION_ID, position);
    formData.append(PARKING_ID, isParking ? 'Да' : 'Нет');

    const myInit = {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    };
    const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);

    return fetch(myRequest).then(response => {
        return response
    }).catch(() => {
        return {error: true};
    })
};
