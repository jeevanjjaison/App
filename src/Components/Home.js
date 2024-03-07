import Cookies from 'js-cookie';

const Home = ({page}) => {  
    const authToken = Cookies.get('authToken');

    return (
        <h1>{authToken}</h1>
    );
};

export default Home;