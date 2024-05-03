
import Header from "./Components/Header";
import Create from "./Components/Create";
import Show from "./Components/Show";

const App = () => {
    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header />
             <Create />
            {/* <Show />  */}
            
        </div>
    );
};

export default App;
