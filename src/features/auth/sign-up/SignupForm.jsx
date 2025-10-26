import { Button, Form, Input, message } from "antd"
import { useNavigate } from "react-router-dom"
import { useAuthStore} from "../../../utils/authStore.js";
import { authApi} from "../api/authApi.js";


const SignInForm = () => {

    const navigate = useNavigate();
    const { setSession } = useAuthStore()

    const onFinish = async (values) => {
        try {
            const res = await authApi.register(values);
            const { token, user } = res;
            setSession({
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
                user
            })
            message.success('Вы успешно зарегистрировались')
            navigate('/')
        } catch (e) {
            message.error(e?.response?.data?.message || 'Ошибка при входе')
        }
    }

    return (
        <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Form.Item label="Email" name={"email"} rules={[{ required: true, message: 'Введите email!' }, { type: 'email', message: 'Неккоректный email!'}]}>
                <Input placeholder="you@example.com" />
            </Form.Item>
            <Form.Item label="Name" name={"name"} rules={[{ required: true, message: 'Введите имя!' }, {  message: 'Неккоректное имя !'}]}>
                <Input placeholder="Введите своё имя" />
            </Form.Item>
            <Form.Item label="Пароль" name={"password"} rules={[{ required: true, message: 'Введите пароль!' }]}>
                <Input.Password placeholder="********" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignInForm