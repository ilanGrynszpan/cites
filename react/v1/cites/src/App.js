import logo from './logo.svg';
import './App.css';
import CategoryList from './components/category_list.js';
import TitleBar from './components/title_bar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let nb_option = ["home", "features","pricing"]

  return (
    <div className="App">
      <TitleBar
        nb_title="cites"
        option={nb_option}
      />
      <CategoryList/>
    </div>
  );
}

//ReactDOM.render(myfirstelement, document.getElementById('root'));
export default App;
