import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg'; 
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { UserContext } from '../../component/context/user.context';
import { CartContext } from '../../component/context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';



const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    

   return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
           <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
               {
                currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (<NavLink to='/auth'>
                SIGN IN
            </NavLink>)
               }
               <CartIcon />
           </NavLinks>
           {isCartOpen && <CartDropdown />}
           </NavigationContainer>
        <Outlet />
     </Fragment>

   );
};

export default NavigationBar