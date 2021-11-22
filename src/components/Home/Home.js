import React from 'react';
import BookCardDetails from './Home/BookCardDetails/BookCardDetails';
import Navigation from './Home/Navigation/Navigation';
import Search from './Home/Search/Search';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Search></Search>
            <BookCardDetails></BookCardDetails>
        </div>
    );
};

export default Home;