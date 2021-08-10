import './App.css';
import Calculator from './components/Calculator.js';

function App() {
  return (
    <div className="App">
      <div className="calculator">
      <div className="row">
          <Calculator>AC</Calculator>
          <Calculator>+/-</Calculator>
          <Calculator>%</Calculator>
          <Calculator>+</Calculator>
        </div>
        <div className="row">
          <Calculator>7</Calculator>
          <Calculator>8</Calculator>
          <Calculator>9</Calculator>
          <Calculator>x</Calculator>
        </div>
        <div className="row">
          <Calculator>4</Calculator>
          <Calculator>5</Calculator>
          <Calculator>6</Calculator>
          <Calculator>-</Calculator>
        </div>
        <div className="row">
          <Calculator>1</Calculator>
          <Calculator>2</Calculator>
          <Calculator>3</Calculator>
          <Calculator>+</Calculator>
        </div>
        <div className="row">
          <Calculator>0</Calculator>
          <Calculator>.</Calculator>
          <Calculator>=</Calculator>
        </div>
      </div>
    </div>
  );
}

export default App;
