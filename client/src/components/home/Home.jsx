import { Fragment } from "react";
import {useEffect} from 'react';


//components
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import Midslide from "./MidSlide"
import MidSection from "./MidSection";

import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector} from "react-redux";
import Footer from "../footer/Footer";

const Component = styled(Box)`
padding: 10px;
background: #f2f2f2;
`; 

const Home = () => {
    const {products}  = useSelector(state => state.getProducts)
    // console.log(products);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <Fragment>
        <NavBar/>
        <Component>
            <Banner/>
            <Midslide products={products} title="Deals for You" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
        </Component>
        <Footer/>
        </Fragment>
    )
}

export default Home;