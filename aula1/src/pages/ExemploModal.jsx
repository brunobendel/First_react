import { useState } from 'react';
import '../componets/styles/modal.css'

export function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div className='button'>
        <button onClick={openModal}>Abrir Modal</button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={closeModal}>&times;</button>
              <h2>Conteúdo do Modal</h2>
              <p>Este é o conteúdo do modal.</p>
            </div>
          </div>
        )}
      </div>
    );
}
