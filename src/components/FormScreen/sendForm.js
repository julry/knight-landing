const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdldBTA5l9d3GhRXKsis5PtgyljpLfGRbYe2BbNmzMHlOZaMg/formResponse';
const NAME_ID = 'entry.1936583718';
const PHONE_ID = 'entry.893457390';
const COMPANY_ID = 'entry.1620009123';
const POSITION_ID = 'entry.1181269117';
const PARKING_ID = 'entry.1537445244';

export const sendForm = ({name, phone, company, position, isParking}) => {
    const formData = new FormData();

    formData.append(NAME_ID, name);
    formData.append(PHONE_ID, phone);
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
