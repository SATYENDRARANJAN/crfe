import logo from './logo.svg';
import './App.css';
import CustomerReviews from './Page';

function App(props) {
  return (
    <div className="App">
     
     <CustomerReviews reviews={props.reviews}/>
    </div>
  );
}

export default App;
