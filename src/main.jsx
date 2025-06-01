import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './instagram/App.jsx'; // 경로 수정
// main.jsx
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
