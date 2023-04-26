

//MUI

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
<<<<<<< HEAD
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
=======
>>>>>>> 23cff9b89f8bec17e19a5099e677dbb2a0a9e52c

import { Modal } from "./Modal";
import { useAuth } from "../Hooks";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

<<<<<<< HEAD

const pages: Array<string> = ['Products', 'Blog'];

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
    const { isLoginModal, onLoginModalToggle, switchAuthMode, isLogin, loginFormik, registerFormik, auth } = useAuth();
    const firstLetter = auth?.auth?.name?.split("")?.[0]?.toUpperCase() || "";
=======
const pages: Array<string> = ['Products', 'Blog'];


type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
    const { isLoginModal, onLoginModalToggle, onHandleChange, user, onLogin, switchAuthMode, isLogin, onSignup } = useAuth()

>>>>>>> 23cff9b89f8bec17e19a5099e677dbb2a0a9e52c
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

<<<<<<< HEAD
                        {auth?.auth?.token ? (
                            <Chip sx={{ cursor: 'pointer' }} avatar={<Avatar>{firstLetter}</Avatar>} color='secondary' label={auth?.auth?.name} />
                        ) :
                            <Button color="inherit" onClick={onLoginModalToggle}>Login</Button>}
=======
                        <Button color="inherit" onClick={onLoginModalToggle}>Login</Button>
>>>>>>> 23cff9b89f8bec17e19a5099e677dbb2a0a9e52c
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                title={isLogin ? 'Login' : 'Register'}
                onCancel={onLoginModalToggle}
                open={isLoginModal}
<<<<<<< HEAD
                maxWidth="xs"
            >
                {
                    isLogin ?
                        <Login auth={auth} loginFormik={loginFormik} switchAuthMode={switchAuthMode} /> :
                        <Signup auth={auth} registerFormik={registerFormik} switchAuthMode={switchAuthMode} />
=======
            >
                {
                    isLogin ?
                        <Login onHandleChange={onHandleChange} user={user} onLogin={onLogin} switchAuthMode={switchAuthMode} /> :
                        <Signup onSignup={onSignup} user={user} onHandleChange={onHandleChange} switchAuthMode={switchAuthMode} />
>>>>>>> 23cff9b89f8bec17e19a5099e677dbb2a0a9e52c
                }

            </Modal>
        </>
    );
}

