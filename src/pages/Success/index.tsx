import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import illustration from '../../assets/illustration.png'
import { Information, InformationData, InformationDataItem, SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <Information>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InformationData>

            <InformationDataItem>
              <MapPin weight="fill" size={32} color="#8047F8" />
              <div>
                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </InformationDataItem>
            <InformationDataItem>
              <Clock weight="fill" size={32} color="#DBAC2C" />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </InformationDataItem>
            <InformationDataItem>
              <CurrencyDollar weight="fill" size={32} color="#C47F17" />
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de crédito</strong>
              </div>
            </InformationDataItem>

        </InformationData>
      </Information>
      <img width={492} height={293} src={illustration} alt="" />
    </SuccessContainer>
  )
}