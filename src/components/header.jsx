


import { NavBar } from './navbar'
import Banner from './banner'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { ContactsOutlined } from '@material-ui/icons'

const Header = props => {
    const { components: { header: isHeader } } = useContext(Context)
    const [offSetX, setOffSetX] = useState(720)


    const [mini, setMini] = useState(false);
    useEffect(() => {
        window.onscroll = () => {

            if (window.scrollY > offSetX) {
                setMini(true)
            }
            else if (window.scrollY < offSetX) {
                setMini(false)
            }
            // console.log(window.scrollY)
        }
    }, [])

    return (
        <div>

            { isHeader ? (
                <>
                    <NavBar menu={mini} />
                    <Banner />
                </>
            ) :
                (
                    <NavBar menu={true} />
                )
            }

        </div>
    )
}




export default Header;