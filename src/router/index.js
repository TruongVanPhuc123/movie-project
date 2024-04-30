import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import BlankLayout from '../layout/BlankLayout'
import HomePage from '../page/HomePage'
import LoginPage from '../page/LoginPage'
import RegisterPage from '../page/RegisterPage'
import NotFoundPage from '../page/NotFoundPage'
import AuthRequired from './AuthRequired'
import SearchPage from '../page/SearchPage'
import DetailPage from '../page/DetailPage'
import GenresPage from '../page/GenresPage'
import PersonPage from '../page/PersonPage'
import MoviePage from '../page/MoviePage'
import TVPage from '../page/TVPage'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<AuthRequired><MainLayout /></AuthRequired>}>
                <Route index element={<HomePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/detail' element={<DetailPage />}>
                    <Route path=':id' element={<DetailPage />} />
                </Route>
                <Route path='/genres' element={<GenresPage />}>
                    <Route path=':id' element={<GenresPage />} />
                </Route>
                <Route path='/person' element={<PersonPage />}>
                    <Route path=':id' element={<PersonPage />} />
                </Route>
                <Route path='/movie' element={<MoviePage />}>
                    <Route path=':id' element={<MoviePage />} />
                </Route>
                <Route path='/tv' element={<TVPage />}>
                    <Route path=':id' element={<TVPage />} />
                </Route>
            </Route>
            <Route element={<BlankLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />

            </Route>
        </Routes>
    )
}

export default Router