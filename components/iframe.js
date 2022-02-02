import React from 'react';

const PageFrame = (props) => {
  return <iframe hide-onload id="contenido" type="text/html" allowFullScreen="" src={props.url}
  frameBorder="0"
  width="100%"
  height="100%"
  scrolling="yes"
  sandbox="allow-scripts allow-same-origin allow-top-navigation
  allow-forms allow-popups allow-pointer-lock
  allow-popups-to-escape-sandbox allow-downloads"></iframe>;
}

export default PageFrame;