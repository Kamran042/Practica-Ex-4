
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
import Girls from '../../../components/Site/Girls/Girls'
import Products from '../../../components/Site/Products/Products'
    import MainContext from '../../../context/context'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Girls/>
                <Products/>
        </>
        )
    }
    
    export default Home
        