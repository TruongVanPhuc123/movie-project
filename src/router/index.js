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

function Router() {
    return (
        <Routes>
            <Route path='/' element={<AuthRequired><MainLayout /></AuthRequired>}>
                <Route index element={<HomePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/detail' element={<DetailPage />}>
                    <Route path=':id' element={<DetailPage />} />
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