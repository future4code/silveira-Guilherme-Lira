import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from './../../Constants/url';
import { useEffect } from 'react';
import { CardRestaurant, Category, ContainerRestaurant, SectionProductByCategory } from './style';
import CardRestaurantDetails from '../../Components/CardRestaurantDetails/CardRestaurantDetails';
import CardProduct from '../../Components/CardProduct/CardProduct';
import Header from './../../Components/Header/Header';

const Restaurant = () => {

    const { restaurantId } = useParams()
    const [restaurant, setRestaurant] = useState([])
    const [categories, setCategories] = useState([])

    const getRestaurant = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                setRestaurant(res.data.restaurant)
            })
            .catch((er) => {
                console.log(er.response)
            })
    }

    useEffect(() => {
        getRestaurant()
    }, [])

    useEffect(() => {
        if (restaurant.products) {
            const newCategories = []

            for (const product of restaurant.products) {

                if (!newCategories.includes(product.category)) {
                    newCategories.push(product.category)
                }

            }

            setCategories(newCategories)

        }
    }, [restaurant])

    return (
        <ContainerRestaurant>
            <Header title={"Restaurante"} back/>
            <CardRestaurant>
                <CardRestaurantDetails restaurant={restaurant} />
                {
                    restaurant.products && categories.map((category) => {
                        return <SectionProductByCategory>
                            <Category> {category} </Category>
                            {
                                restaurant.products
                                .filter((product) => {
                                    return product.category === category
                                })
                                .map((product) => {
                                    return <CardProduct product={product} key={product.id} />
                                })
                            }
                        </SectionProductByCategory>
                    })
                }
            </CardRestaurant>
        </ContainerRestaurant>
    )
}

export default Restaurant