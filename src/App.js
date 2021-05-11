import FormTodoList from './components/FormTodoList'
import TodoList from './components/TodoList'

import {TodoProvider} from './contexts/TodoContext'

function App() {

  return (
    <TodoProvider>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <FormTodoList />
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
