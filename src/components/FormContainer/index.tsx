import { useFormContext } from 'react-hook-form'
import {
  FormContainer, Input, Row
} from './styles'

export function FormContent() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <Row columns="1fr 1fr 1fr">
        <Input 
          type="text"
          id="cep"
          placeholder='CEP'
          {...register('cep')}
        />
      </Row>
      <Row columns="1fr">
        <Input type="text" id="rua" placeholder='Rua' 
          {...register('rua')}
        />
      </Row>
      <Row columns="1fr 1fr">
        <Input type="text" id="numero" placeholder='Número' 
          {...register('numero')}
        />
        <Input type="text" id="complemento" placeholder='Complemento' 
          {...register('complemento')}
        />
      </Row>
      <Row columns="2fr 3fr 1fr">
        <Input type="text" id="bairro" placeholder='Bairro' 
          {...register('bairro')}
        />
        <Input type="text" id="cidade" placeholder='Cidade' 
          {...register('cidade')}
        />
        <Input type="text" id="uf" placeholder='UF' 
          {...register('uf')}
        />
      </Row>
    </FormContainer>
  )
}