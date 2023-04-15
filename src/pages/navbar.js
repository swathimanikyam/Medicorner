import './navbar.css';

const NavBar = () => {
    return (
        <div className={'desktop1'}>
            <div className={'navbarSection'}>
                <div className={'medicornerLogo'}>
                    <button className={'medicornerLogo1'}>MEDICORNER</button>
                </div>
                <div className={'navlinks'}>
                    <button className={'findDoctor'}>FIND DOCTOR</button>
                    <button className={'vedioConsult'}>VEDIO CONSULT</button>
                    <button className={'medicines'}>MEDICINES SHOP</button>
                    <button className={'labTest'}>LAB TEST</button>
                    <button className={'labTest'}>SURGERIES</button>
                </div>
                <div className={'dropBoxes'}>
                    <div className={'forCorporates'}>FOR CORPORATES</div>
                    <div className={'forProviders'}>FOR PROVIDERS</div>
                    <div className={'securityHelp'}>{`SECURITY & HELP`}</div>
                </div>
                <button className={'button'}>
                    <div className={'loginsignUp'}>Login/Sign Up</div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
