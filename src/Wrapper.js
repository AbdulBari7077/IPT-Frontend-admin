
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'


export const Wrapper = ({element}) => {
    return (
        <>
            <Header />
            <div className="main" id='app'>
                <Sidebar />
                {element}
            </div>
        </>
    );
}