import { useFormContext } from 'react-hook-form';

import * as S from './styles';

export function AddressFormFields() {
  const { register, formState } = useFormContext();

  return (
    <S.AddressContainer>
      <S.Input
        placeholder='CEP'
        type='number'
        className='cep'
        {...register('cep')}
      // error={errors.cep?.message}
      />
      <S.Input
        placeholder='Rua'
        className='street'
        {...register('street')}
      // error={errors.street?.message}
      />
      <S.Input
        type='number'
        placeholder='Número'
        {...register('number')}
      // error={errors.number?.message}
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
