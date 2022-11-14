import React, {useState} from 'react';
import '../assets/style/style.css';

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpended] = useState(false);

  return (
    <div className="about-page collapsible">
        <button onClick={() => {setIsOpen(!isOpen); setIsExpended(!isExpanded)}}>
            <div className="title">{props.title}</div>
            <div className="icon">
                <i className={'fas fa-sharp fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </button>
        {isOpen && <div className="content">
                {props.children}
        </div>}
    </div>
  );
}

export default Collapsible;