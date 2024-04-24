import React, { useState } from 'react'

import { FormProvider, FTextField, FCheckbox, useFormState } from '../components/form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import useAuth from '../hook/useAuth'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

import { Alert, Container, IconButton, InputAdornment, Link, Stack } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';


const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email error").required("Email is required"),
    password: Yup.string().required("Password is required")
})


const defaultValues = {
    email: '',
    password: '',
    remember: true,
}

function LoginPages() {

    const methods = useForm({ resolver: yupResolver(loginSchema), defaultValues })
    const { reset, handleSubmit, formState: { isSubmitting } } = methods
    const [showPassword, setShowPassword] = useState(false)


    const auth = useAuth()
    const navigate = useNavigate()

    const onSubmit = async (data) => {

        let { email, password } = data

        try {
            await auth.login({ email, password })
            navigate("/")
        } catch {
            reset()
        }
    }

    return (
        <Container maxWidth='xs'>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>

                    {auth.error !== null && (
                        <Alert severity='error'>{auth.error}</Alert>
                    )}
                    <Alert severity='info'>Don't have account?{' '}
                        <Link variant='subtitle2' component={RouterLink} to='/register'>Get Started</Link>
                    </Alert>

                    <FTextField name='email' label='Email Address' />
                    <FTextField name='password' label='Password'
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Stack>
                <Stack direction="row" alignItems='center' justifyContent='space-between' sx={{ my: 2 }}>
                    <FCheckbox name='remember' label='Remember me' />
                    <Link component={RouterLink} variant='subtitle2'>Forgot Password?</Link>
                </Stack>
                <LoadingButton fullWidth size='large' type='submit' variant='contained' loading={isSubmitting}>Login</LoadingButton>
            </FormProvider>
        </Container >
    )
}

export default LoginPages