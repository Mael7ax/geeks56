import { Card } from "antd"
import SignupForm from "./SignupForm.jsx";


const SignUp = () => {

    return (
        <div style={{minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 16}}>
            <Card style={{width: 420}} title="Sign In">
                <SignupForm/>
            </Card>
        </div>
    )
}

export default SignUp