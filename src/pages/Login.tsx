import { useState } from 'react';
import { Form, Button, Card, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const controller = new AbortController();

        setError(null);
        setLoading(true);

        try {
            // const response = await api.post('/auth/login',
            //     { email, password },
            //     { signal: controller.signal } // Pasamos la señal a Axios
            // );
            // const { token } = response.data;
            const token = "token-1234"
            login(token); // Guardamos en Context y LocalStorage
            navigate('/'); // Vamos a la home
        } catch (err: any) {
            if (axios.isCancel(err)) {
                console.log('Petición cancelada');
            } else if (err.code === 'ECONNABORTED') {
                setError('El servidor tarda demasiado en responder. Reintenta.');
            } else {
                setError('Error de conexión o credenciales inválidas.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '100%', maxWidth: '400px' }} className="shadow">
                <Card.Body className="p-4">
                    <h2 className="text-center mb-4">Bienvenido</h2>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                            {loading ? <Spinner size="sm" animation="border" /> : 'Entrar'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;