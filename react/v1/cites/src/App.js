import logo from './logo.svg';
import './App.css';
import CategoryList from './components/category_list.js';
import TitleBar from './components/title_bar';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button} from 'react-bootstrap';

function App() {

  let nb_option = ["Entrar", "Crie sua conta","Cadastre seu serviço"]

  return (
    <div className="App">
      <TitleBar
        nb_title="cites"
        option={nb_option}
      />
      <p>Escolha abaixo o serviço que precisa e encontraremos profissionais para lhe atender:</p>
      <CategoryList/>
      <p>Conhece um bom profissional?</p>
      <p>Alguém de confiança que pode ajudar muitas pessoas?</p>
      <Button variant="primary">Clique aqui para nos recomendar!</Button>
      <footer>
      © 2020 Copyright:
            Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div>
  );
}

//ReactDOM.render(myfirstelement, document.getElementById('root'));
export default App;
