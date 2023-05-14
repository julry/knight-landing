import { useMemo, useState } from 'react';
import { useIMask } from 'react-imask';
import styled from 'styled-components';
import formBg from '../../assets/images/formBg.svg';
import { Button } from '../shared/Button';
import btnBg from '../../assets/images/buttonLgGray.svg';
import { Text } from '../shared/Text';

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 77px 45px 62px 53px;
  background: url(${formBg}) center 0 no-repeat;
  background-size: contain;
  min-height: 691px;
  margin: 0 18px;
  max-width: 380px;

  @media screen and (min-width: 400px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 330px) {
    background-size: cover;
    padding-left: 35px;
    padding-right: 20px;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px;
  width: 100%;
  background-image: url(${btnBg});
  opacity: ${({isDisabled}) => isDisabled ? '0.6' : '1'};
`;

const InputLabel = styled.p`
  font-weight: 700;
  font-size: 19px;
  line-height: 90%;
  letter-spacing: -0.03em;
  color: #513C3E;
  margin-bottom: 10px;
  text-align: left;

  @media screen and (max-width: 325px) {
    font-size: 15px;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  background: ${({isError}) => isError ? 'rgba(228, 108, 108, 0.3)' : 'transparent'};
  outline: none;
  border: none;
  border-bottom: 1px solid #513C3E;
  padding-bottom: 5px;
  color: #513C3E;
  filter: ${({isError}) => isError ? 'blur(1px)' : 'unset'};
  transition: background-color 0.2s ease-in, filter 0.2s ease-in;
  
  &::placeholder {
    color: #513C3E;
    opacity: 0.5;
  }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  border: 2px solid #513C3E;
  border-radius: 50%;
  margin-right: 10px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  background: ${({isError}) => isError ? 'rgba(228, 108, 108, 0.3)' : 'transparent'};

  &:first-of-type {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #513C3E;
  }
`;

const TextStyled = styled(Text)`
  line-height: 120%;
  color: #513C3E;
`;

export const Form = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [isParking, setIsParking] = useState(undefined);
    const [opts, setOpts] = useState({mask: '+{7} {(}000{)} 000-00-00'});
    const [error, setError] = useState(false);
    const {ref, setValue} = useIMask(opts, {
        onAccept: (value) => setPhone(value),
    });

    const isDisabledSubmit = useMemo(() =>
            !Boolean(name) || !Boolean(phone) || !Boolean(company) ||
            !Boolean(position) || isParking === undefined || !Boolean(email)
        , [name, phone, company, position, email, isParking]);

    const handleSubmit = () => {
        if (isDisabledSubmit) {
            setError(true);
            setTimeout(() => setError(false), 1000);
            return;
        }
        onSubmit({name, phone, company, position, email, isParking})
    };

    return (
        <Wrapper>
            <InputLabel>
                Как к тебе обращаться?
            </InputLabel>
            <Input
                name={'name'}
                placeholder={'ФИО'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                isError={error && !name}
            />
            <InputLabel>
                Куда отправлять письма о событиях общества?
            </InputLabel>
            <Input
                ref={ref}
                name={'phone'}
                type={'tel'}
                placeholder={'+7 (999) 123-45-67'}
                value={phone}
                onChange={(e) => setValue(e.target.value)}
                isError={error && !phone}
            />
            <Input
                name={'email'}
                type={'email'}
                placeholder={'example@post.ru'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isError={error && !email}
            />
            <InputLabel>
                От какой компании ты вступаешь в наше общество?
            </InputLabel>
            <Input
                name={'company'}
                placeholder={'FutureToday'}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                isError={error && !company}
            />
            <InputLabel>
                Какой ранг ты в ней занимаешь?
            </InputLabel>
            <Input
                name={'position'}
                placeholder={'Должность'}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                isError={error && !position}
            />
            <InputLabel>
                {'Нужно ли застолбить место\nдля парковки вашего\nверного коня?'}
            </InputLabel>
            <RadioButtonLabel isError={error && isParking === undefined}>
                <InputRadioButton
                    type="radio"
                    name={'isParking'}
                    onChange={() => setIsParking(true)}
                />
                <RadioIconStyled/>
                <TextStyled>Парковка нужна</TextStyled>
            </RadioButtonLabel>
            <RadioButtonLabel isError={error && isParking === undefined}>
                <InputRadioButton
                    type="radio"
                    name={'isParking'}
                    onChange={() => setIsParking(false)}
                />
                <RadioIconStyled/>
                <TextStyled>Парковка не нужна</TextStyled>
            </RadioButtonLabel>
            <ButtonStyled
                isDisabled={isDisabledSubmit}
                onClick={handleSubmit}
            >
                Принести клятву
            </ButtonStyled>
        </Wrapper>
    );
};
