import { useFormContext } from 'react-hook-form';
import { getZipCodeInfo } from '../../../../services/getZipCodeInfo';

import * as S from './styles';

export function AddressFormFields() {
  const { register, setValue, setFocus } = useFormContext();

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
      <S.Input
        placeholder='CEP'
        type='number'
        className='zipCode'
        {...register('zipCode')}
        onBlur={checkZipcode}
      // error={errors.zipCode?.message}
      />
      <S.Input
        placeholder='Rua'
        className='address'
        {...register('address')}
      // error={errors.address?.message}
      />
      <S.Input
        type='number'
        placeholder='Número'
        {...register('addressNumber')}
      // error={errors.addressNumber?.message}
      />
      <S.InputContainer className='complement'>
        <S.Input
          placeholder='Complemento'
          {...register('complement')}
        // error={errors.complement?.message}
        />
        <span>Opcional</span>
      </S.InputContainer>
      <S.Input
        placeholder='Bairro'
        {...register('district')}
      // error={errors.district?.message}
      />
      <S.Input
        placeholder='Cidade'
        {...register('city')}
      // error={errors.city?.message}
      />
      <S.Input
        placeholder='UF'
        {...register('uf')}
      // error={errors.uf?.message}
      />
    </S.AddressContainer>
  );
}
