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

export function AddressFormFields() {
  const { register, formState, setValue, setFocus } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  async function checkZipcode(e: React.ChangeEvent<HTMLInputElement>) {
    const cep = e.target.value.replace(/\D/g, '');
    const { data } = await getZipCodeInfo.get(`${cep}/json`);

    setValue('address', data.logradouro);
    setValue('district', data.bairro);
    setValue('city', data.localidade);
    setValue('uf', data.uf);
    setFocus('addressNumber');
  }

  return (
    <S.AddressContainer>
      <S.InputWrapper className='zipCode'>
        <S.InputStyled
          type='number'
          placeholder='CEP'
          {...register('zipCode')}
          onBlur={checkZipcode}
          hasError={!!errors.zipCode}
        />
        {errors.zipCode && <S.TextError>{errors.zipCode?.message}</S.TextError>}
      </S.InputWrapper>

      <S.InputWrapper className='address'>
        <S.InputStyled
          type='text'
          placeholder='Rua'
          {...register('address')}
          hasError={!!errors.address}
        />
        {errors.address && <S.TextError>{errors.address?.message}</S.TextError>}
      </S.InputWrapper>

      <S.InputWrapper>
        <S.InputStyled
          type='number'
          placeholder='Número'
          {...register('addressNumber')}
          hasError={!!errors.addressNumber}
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
        />
        {errors.uf && <S.TextError>{errors.uf?.message}</S.TextError>}
      </S.InputWrapper>
    </S.AddressContainer>
  );
}
