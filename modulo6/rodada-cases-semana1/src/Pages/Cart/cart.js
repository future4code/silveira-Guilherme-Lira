import React, { useState } from 'react'
import { Button } from "@mui/material"
import { CartConfig, CartInfo, EmptyCart, Freight, InfoProfile, InfoRestaurant, Main, MainCart, Total, Payment, Form } from './styled'
import { useRequestData } from './../../Hooks/useRequestData';
import { BASE_URL } from './../../Constants/url';
import CardCart from '../../Components/CardCart/CardCart';

const Cart = () => {

    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState([])
    const [paymentMethod, setPaymentMethod] = useState({
        'money': false,
        'creditcard': false
    })

    const mockData = [
        {
            name: 'Comida',
            price: 45,
            photoUrl: '',
            amount: 2,
            description: 'Porcaria cara que não vale a pena'
        }
    ]

    const onChangePayment = (e) => {
        const newCheck = { ...paymentMethod }
        newCheck[e.target.name] = e.target.checked

        const result = Object.keys(newCheck).filter((pay) => {
            if (newCheck[pay]) {
                return [pay, ...payment]
            }
        })
        setPayment(result)
        setPaymentMethod(newCheck)
    }

    return (
        <Main>
            <MainCart>
                <p>Meu Carrinho</p>
            </MainCart>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
                <InfoRestaurant>
                    <p>Nome do restaurante</p>
                    <p>Rua do restaurante</p>
                    <p>30 - 40 min</p>
                </InfoRestaurant>
                <CartInfo>
                    {mockData.length > 0 ? mockData.map((data) => {
                        return (
                            <CardCart
                                name={data.name}
                                price={data.price}
                                photoUrl={data.photoUrl}
                                amount={data.amount}
                                description={data.description}
                            />
                        )
                    }) : <EmptyCart>Carrinho Vazio</EmptyCart>}
                </CartInfo>
                <Payment>
                    <Freight> Frete {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(6)}
                    </Freight>
                    <Total>
                        <p>Subtotal</p>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(10)}
                    </Total>
                    <h1>Forma de pagamento</h1>
                    <hr />
                    <Form>
                        {Object.keys(paymentMethod).map((key) => {
                            const checked = paymentMethod[key]
                            return (
                                <div key={key}>
                                    <input
                                        checked={checked}
                                        name={key}
                                        id={key}
                                        type={'checkbox'}
                                        onChange={onChangePayment}
                                    />
                                    <label>{key}</label>
                                </div>
                            )
                        })}
                        <Button>Confirmar</Button>
                    </Form>
                </Payment>
            </CartConfig>
        </Main>
    )
}

export default Cart