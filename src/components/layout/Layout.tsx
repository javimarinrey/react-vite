import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;