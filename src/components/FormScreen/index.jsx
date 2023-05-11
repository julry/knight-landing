import styled from 'styled-components';
import formImage from '../../assets/images/formImage.svg';
import { useScreen } from '../../hooks/useScreen';
import { Title } from '../shared/Title';
import { sendForm } from './sendForm';
import { Form } from './Form';

const TitleStyled = styled(Title)`
  margin: 40px 0;
  font-size: 35px;
  color: #FAE5C3;

  @media screen and (max-width: 320px) {
    font-size: 27px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 409px;
  display: flex;
  justify-content: center;
  margin-top: -59px;

  @media screen and (min-width: 400px) {
    height: auto;
    width: 100%;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  @media screen and (min-width: 400px) {
    height: auto;
    width: 100%;
  }
`;

export const FormScreen = () => {
    const {next} = useScreen();

    const onSubmit = async ({name, phone, company, position, isParking}) => {
        await sendForm({name, phone, company, position, isParking});
        next();
    };

    return (
        <div>
            <TitleStyled>
                {'Для принятия\nв общество Круглого\nстола нам нужна кое-\nкакая информация'}
            </TitleStyled>
            <Form onSubmit={onSubmit}/>
            <ImageWrapper>
                <Image src={formImage} alt={''}/>
            </ImageWrapper>
        </div>
    );
};
