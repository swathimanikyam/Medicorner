import { useNavigationType, useLocation } from 'react-router-dom';
import NavBar from './pages/navbar';
import { useEffect } from 'react';

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = '';
        let metaDescription = '';

        // eslint-disable-next-line default-case
        switch (pathname) {
            case '/':
                title = '';
                metaDescription = '';
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return <NavBar />;
}
export default App;
