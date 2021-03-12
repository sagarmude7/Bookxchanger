import React,{useEffect} from 'react'
import Navbar from "../Navbar/Navbar.js"
import Description from "./Description/Description.js"
import SearchBox from "./SearchBar/SearchBox.js"
import Chatbot from "./Chatbot/chatbot.js"
import DisplayBooks from '../AllBooksComponents/AllBooks'
import {getBooks} from '../../actions/books'
import {useDispatch,useSelector} from 'react-redux'
import Footer from "../Footer/footer.js"
import {useState} from "react";
import FilteredBooks from "../AllBooksComponents/FilteredBooks/filteredBooks.js"
const Home = () => {
    const dispatch = useDispatch()
 
    return (
        <>
         <Navbar />
        <SearchBox /> 
        <Description />
        
            {/* <Chatbot /> */}
            <Footer/>
        </>
    )
}

export default Home;