import { Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/users/usersSlice'
import { firebase } from '../firebase/config';
import * as commonStyles from './commonStyles';

export function GoogleLoginButton(){
    return (
        <>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
        </>
    )
}

function GenericButton(props){
    return (
        <Button onPress={props.onPress} title={props.title} color={commonStyles.colors['black']}/>
    )
}


export function LogoutButton({navigation}) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.users);

    // TODO: Move this functionality to app.js?
    const onButtonPress = () => {
        console.log(`Clearing user: ${JSON.stringify(userToken)}`);
        dispatch(clearUser());
        firebase.auth().signOut();
    }

    return (
        <GenericButton onPress={onButtonPress} title={"Logout"}/>
    )
}

export function SidebarButton({navigation}){
    const dispatch = useDispatch();
    
    const onButtonPress = () => {

    }

    return (
        <GenericButton onPress={onButtonPress}/>
    )
}