import axios from 'axios'
import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { BASE_URL } from './../../Constants/url';
import { useEffect, useState } from 'react';
import { CardsRestaurant, ContainerFeed, InputSearch, MenuItem, Menu, BoxInputSearch } from './style';
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant';
import Header from '../../Components/Header/Header';

const Feed = () => {
    useProtectedPage()

    const [restaurants, setRestaurants] = useState([])
    const [inputText, setInputText] = useState('')
    const [valueCategory, setValueCategory] = useState('')
    const [categoryRest, setCategoryRest] = useState([])

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                setRestaurants(res.data.restaurants)
                filterCategory(res.data.restaurants)
            })
            .catch((er) => {
                console.log(er)
            })
    }

    const filterRestaurant = restaurants.filter((res) =>
        inputText ? res.name.toLowerCase().includes(inputText.toLowerCase()) : true
    )
        .filter((restaurant) =>
            valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()) : true
        )
        .map((restaurant) => {
            return <CardRestaurant
                restaurant={restaurant}
            />
        })

    const filterCategory = (restaurants) => {
        const arrayAux = []

        restaurants.map((res) => {
            arrayAux.push(res.category)
        })

        const removeRepetition = [...new Set(arrayAux)]
        setCategoryRest(removeRepetition)
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    return (
        <ContainerFeed>
            <Header title={"IFuture"} />
            <BoxInputSearch>
                <InputSearch
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </BoxInputSearch>
            <Menu>
                {categoryRest.map((category) => {
                    return (
                        <MenuItem
                            select={false}
                            onClick={() => setValueCategory(category)}
                        >
                            {category}
                        </MenuItem>
                    )
                })}
            </Menu>
            <CardsRestaurant>
                {filterRestaurant}
            </CardsRestaurant>
        </ContainerFeed>
    )
}

export default Feed