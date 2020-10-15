import React from 'react'
import styled from 'styled-components';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Oferta from './pages/Oferta';
import Candles from './components/Candles';

const Style = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    flex: 1;
    background-color: rgb(84, 84, 84);
`

const useStyles = makeStyles({
    maxWidthLg: {
        maxWidth: "1600px",
        minHeight: '100vh',
        padding: "0",
        display: 'flex',
        flexDirection: 'column'
    }
})

const App = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return(
        <>
            <Router>
                <CssBaseline />
                <Container maxWidth="lg" classes={{maxWidthLg: classes.maxWidthLg}}>
                    <Style>
                        <Logo />
                        <Menu isMobile={isMobile} />
                            <Switch>
                                <Route path="/" exact >
                                    <Candles />
                                </Route>
                                <Route path="/oferta" component={Oferta}></Route>
                                <Route path="/"></Route>
                                <Route path="/"> </Route>
                            </Switch>
                        <Footer />
                    </Style>
                </Container>
            </Router>
        </>
    )
}

export default App;