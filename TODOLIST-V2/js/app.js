
import { render } from './sub-module/render.js';
import {loadState} from "./sub-module/store.js";
import {addTodo, clearCompletedTodos, deleteTodo, getState, toggleTodo} from "./sub-module/state.js";

(function() {



  // ======== 실행 코드 ========== //
  render(getState());

})();