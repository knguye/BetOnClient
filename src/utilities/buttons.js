import { Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/users/usersSlice'

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

export function LogoutButton({navigation}) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.users);


    return (
        <Button onPress={() => {
            console.log(`Clearing user: ${JSON.stringify(userToken)}`);
            dispatch(clearUser());
        }} title={"Logout"}/>
    )
}
