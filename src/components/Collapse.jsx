import React from 'react';
import useCollapse from 'react-collapsed';
import '../assets/style/style.css';

function Section(props) {
  const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className="about-page collapsible">
        <button {...getToggleProps()}>
            <div className="title">{props.title}</div>
            <div className="icon">
                <i className={'fas fa-sharp fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </button>
        <div {...getCollapseProps()}>
            <p className="content">
                {props.children}
            </p>
        </div>
    </div>
  );
}

export default Section;