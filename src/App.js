import AnimateRoutes from './components/AnimateRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className="App">
                <AnimateRoutes />
            </div>
        </Router>
    );
}

export default App;
