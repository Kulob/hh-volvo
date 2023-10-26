import React, { useEffect, useState } from "react";
import "./phone.scss";
import QrImg from '../../assets/qr-code.jpg'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
} from "@mui/material";
import { PhoneNumberUtil } from "google-libphonenumber";
import { Link, useNavigate } from "react-router-dom";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const PhoneComponents = () => {
  const [inputValue, setInputValue] = useState("+7(___)___-__-__");
  const navigate = useNavigate()
  const isValid = isPhoneValid(inputValue);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const phoneNumberClick = formatPhoneNumber(
      inputValue.concat(e.currentTarget.name)
    );
    setInputValue(phoneNumberClick);
  };

  function formatPhoneNumber(value: string) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 0) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `+${phoneNumber.slice(0, 1)}(${phoneNumber.slice(1,4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7,9)}-${phoneNumber.slice(9, 11)}`;
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formatedPhoneNumber);
  };
  
  
  return (
    <div className="phone">
      <div className="phone_container">
        <div className="phone_left">
          <div className="">
            <h3>Введите ваш номер мобильного телефона</h3>
              <input
              className="phone_input"
              value={inputValue}
              type="tel"
              onChange={(e) => handleInput(e)}
              required
            />
            <span>
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </span>
            <div className="phone_button">
              <Button
                name="1"
                variant="outlined"
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                onClick={handleClick}
              >
                1
              </Button>
              <Button
                name="2"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                2
              </Button>
              <Button
                name="3"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                3
              </Button>
              <Button
                name="4"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                4
              </Button>
              <Button
                name="5"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                5
              </Button>
              <Button
                name="6"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                6
              </Button>
              <Button
                name="7"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                7
              </Button>
              <Button
                name="8"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                8
              </Button>
              <Button
                name="9"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                9
              </Button>
              <Button
                onClick={() => setInputValue(inputValue.slice(0, -1))}
                sx={{
                  width: "190px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                Стереть
              </Button>
              <Button
                name="0"
                onClick={(e) => handleClick(e)}
                sx={{
                  width: "88px",
                  height: "52px",
                  border: "3px solid #1976d2",
                  borderColor: "black !important",
                  color: "black",
                  fontSize: "16px",
                }}
                variant="outlined"
              >
                0
              </Button>
            </div>
            {!isValid ? (
              <div style={{ color: "red", marginTop:'13px' }}>Неверно введён номер</div>
            ) : (
              <FormGroup sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <FormControlLabel 
                  control={<Checkbox  defaultChecked sx={{marginLeft:'40px','& .MuiSvgIcon-root': { fontSize: 40 }}}/>}
                  label="Согласие на обработку персональных данных"
                />
              </FormGroup>
            )}

            <Button
            onClick={() => navigate('/order')}
              variant="contained"
              sx={{ color: "#fff", background: "#000", marginTop:'13px', width:'100%',height:'52px' }}
              disabled={!isValid}
              type="submit"
            >
              Подтвердить номер
            </Button>
          </div>
        </div>
        <div className="phone_right">
          <Link to='/' className="phone_close">
          <Button variant="contained" sx={{ background:'#000', color:'#fff'}}>X</Button>
          </Link>
          <div className="phone_gr">
            <h4 className="phone_info">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</h4>
            <img src={QrImg} alt="Qr"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneComponents;
