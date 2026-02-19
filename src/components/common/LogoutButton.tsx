import { Button } from 'react-bootstrap';
import {useAuth} from "../../context/AuthContext.tsx";

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Button variant="danger" onClick={logout}>
            Cerrar Sesión
        </Button>
    );
};

export default LogoutButton;