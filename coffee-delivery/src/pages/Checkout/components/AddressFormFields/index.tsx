import { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getZipCodeInfo } from '../../../../services/getZipCodeInfo';

import * as S from './styles';

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

interface zipCodeResponseProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function AddressFormFields() {
  const [notFoundZipCode, setNotFoundZipCode] = useState(false);

  const { register, formState, setValue, setFocus } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  function formatterZipCode(e: ChangeEvent<HTMLInputElement>) {
    const zipCode = e.target.value.replace(/\D/g, '');
    const zipCodeFormatted = zipCode.replace(/^(\d{5})(\d)/, '$1-$2');

    setValue('zipCode', zipCodeFormatted);
  }

  function changeFocusInput(data: zipCodeResponseProps) {
    if (data.logradouro) {
      setFocus('addressNumber');
    } else {
      setFocus('address');
    }
  }

  async function getDataByZipCode(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    if (inputValue.length < 8) {
      setNotFoundZipCode(true);
      return;
    } else {
      setNotFoundZipCode(false);
    }

    const zipCode = inputValue.replace(/\D/g, '');
    const { data } = await getZipCodeInfo.get(`${zipCode}/json`);

    if (data.erro) {
      setNotFoundZipCode(true);
    } else {
      setNotFoundZipCode(false);
    }

    setValue('address', data.logradouro);
    setValue('district', data.bairro);
    setValue('city', data.localidade);
    setValue('uf', data.uf);

    changeFocusInput(data);
  }

  return (
    <S.AddressContainer>
      <S.InputWrapper className='zipCode'>
        <S.InputStyled
          type='text'
          placeholder='CEP'
          maxLength={9}
          {...register('zipCode')}
          onBlur={getDataByZipCode}
          onChange={e => formatterZipCode(e)}
          hasError={!!errors.zipCode || notFoundZipCode}
        />
        {errors.zipCode && <S.TextError>{errors.zipCode?.message}</S.TextError>}
        {notFoundZipCode && (
          <S.TextError>CEP inválido, tente novamente.</S.TextError>
        )}
      </S.InputWrapper>

      <S.InputWrapper className='address'>
        <S.InputStyled
          type='text'
          placeholder='Rua'
          {...register('address')}
          hasError={!!errors.address}
          disabled={notFoundZipCode}
        />
        {errors.address && <S.TextError>{errors.address?.message}</S.TextError>}
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputStyled
          type='number'
          placeholder='Número'
          {...register('addressNumber')}
          hasError={!!errors.addressNumber}
          disabled={notFoundZipCode}
        />
        {errors.addressNumber && (
          <S.TextError>{errors.addressNumber?.message}</S.TextError>
        )}
      </S.InputWrapper>

      <S.InputWrapper className='complement'>
        <S.InputContainer>
          <S.InputStyled
            type='text'
            placeholder='Complemento'
            className='inputComplement'
            {...register('complement')}
            hasError={!!errors.complement}
            disabled={notFoundZipCode}
          />
          <span>Opcional</span>
        </S.InputContainer>
        {errors.complement && (
          <S.TextError>{errors.complement?.message}</S.TextError>
        )}
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputStyled
          type='text'
          placeholder='Bairro'
          {...register('district')}
          hasError={!!errors.district}
          disabled={notFoundZipCode}
        />
        {errors.district && (
          <S.TextError>{errors.district?.message}</S.TextError>
        )}
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputStyled
          type='text'
          placeholder='Cidade'
          {...register('city')}
          hasError={!!errors.city}
          disabled={notFoundZipCode}
        />
        {errors.city && <S.TextError>{errors.city?.message}</S.TextError>}
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputStyled
          type='text'
          placeholder='UF'
          className='inputUf'
          {...register('uf')}
          hasError={!!errors.uf}
          disabled={notFoundZipCode}
        />
        {errors.uf && <S.TextError>{errors.uf?.message}</S.TextError>}
      </S.InputWrapper>
    </S.AddressContainer>
  );
}
