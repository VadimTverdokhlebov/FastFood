import './modal-window.css';
import '../modal-menu.js';
import '../modal-button.js';
import '../modal-description.js';
import '../modal-content.js';
import config from '../../../config.js';
import { storageStateModal, storageCustomSandwich } from '../../../store/store.js';
import activityModal from '../../../store/actionCreators/activityModal.js';
import removeCustomSandwich from '../../../store/actionCreators/removeCustomSandwich.js';

export default class ModalWindow extends HTMLElement {
  constructor() {
    super();
    this.subscribeChangeActivityModal();
  }

  render() {
    const html = /* html */`
            <div id="modalContainer">                
                <div class="modalTop">
                    <button class="closeButtonModal">
                        <img src="http://${config.host}:${config.port}/templates/closeButton.png" class="buttonRemoveModal"/>
                    </button>                            
                    <modal-description></modal-description>
                </div>

                <modal-menu id="menuModal"></modal-menu>
                <div>
                    <modal-button id="modalButtons"></modal-button>
                </div>
                <modal-content></modal-content>

            </div>`;

    this.innerHTML = html;
    this.removeModalAddEventListener();
  }

  subscribeChangeActivityModal() {
    storageStateModal.subscribe(() => {
      this.activity = storageStateModal.getState().activity;
      if (this.activity) {
        this.render();
      } else {
        this.innerHTML = '';
      }
    });
  }

  removeModalAddEventListener() {
    this.querySelector('.closeButtonModal')
      .addEventListener('click', () => {
        storageStateModal.dispatch(activityModal(false));
        storageCustomSandwich.dispatch(removeCustomSandwich());
      });
  }
}

customElements.define('modal-window', ModalWindow);
