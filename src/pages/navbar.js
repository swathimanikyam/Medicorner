import './navbar.css';

const NavBar = () => {
    return (
        <div className={'desktop1'}>
            <div className={'navbarSection'}>
                <div className={'navBar'} />
                <div className={'medicornerLogo'}>
                    <div className={'medicornerLogo1'}>MEDICORNER</div>
                </div>
                <div className={'navlinks'}>
                    <div className={'findDoctor'}>FIND DOCTOR</div>
                    <div className={'vedioConsult'}>VEDIO CONSULT</div>
                    <div className={'medicines'}>MEDICINES</div>
                    <div className={'labTest'}>LAB TEST</div>
                    <div className={'labTest'}>SURGERIES</div>
                </div>
                <div className={'dropBoxes'}>
                    <div className={'forCorporates'}>FOR CORPORATES</div>
                    <div className={'forProviders'}>FOR PROVIDERS</div>
                    <div className={'securityHelp'}>{`SECURITY &HELP`}</div>
                </div>
                <div className={'button'}>
                    <div className={'buttonChild'} />
                    <div className={'loginsignUp'}>Login/Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
