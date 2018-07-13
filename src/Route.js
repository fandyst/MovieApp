import { StackNavigator } from 'react-navigation'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'

export const Route = StackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Home: { screen: Home },
},
{ headerMode: 'none'})