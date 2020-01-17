import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import 'react-h5-audio-player/lib/styles.css';

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#FDFDFF',
        fontFamily: "'Maven Pro','Nanum Gothic Coding', sans-serif",
        wordSpacing: "0.1em",
        letterSpacing: "0.02em",
    },
    main: {
        height:'66%',
        padding: '3%',
        flex: 1,
    },
}

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Young_NEXT</title>
                </Head>
                <div style={styles.layout}>
                    <Header />
                    <main style={styles.main}>
                        <Component {...other}/>
                    </main>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}