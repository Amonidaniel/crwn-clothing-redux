import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
height: 70px; 
width: 100%; 
display: flex; justify-content: space-between; 
margin-bottom: 25px; 
`
export const LogoContainer = styled(Link)`
width: auto;
height: auto;
float:left;
padding:10px 0px 0px 10px;
`
export const NavLinks = styled.div`
width: 50%; 
height: 100%; 
display: flex; 
align-items: center; 
justify-content: flex-end;
`
export const NavLink = styled(Link)`
padding: 10px 15px; 
cursor: pointer;
`

//   .navigation { 
//     height: 70px; 
//    width: 100%; 
//    display: flex; justify-content: space-between; 
//    margin-bottom: 25px; 

   
// .logo-container { 
//     width: auto;
//     height: auto;
//     float:left;
//     padding:10px 0px 0px 10px;} 


// .nav-links-container { width: 50%; height: 100%; display: flex; align-items: center; justify-content: flex-end; 
    
// .nav-link { padding: 10px 15px; cursor: pointer; } } }