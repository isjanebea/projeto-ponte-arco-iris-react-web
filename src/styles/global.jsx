import { createGlobalStyle } from 'styled-components'
import React from 'react';
const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*/
 * END RESET.CSS
 *
 * ESTILOS global do site 
 * /
  body {
 
    
  }
  h3, h2, h1, p, span, input, td, thead, tbody, em, strong, body {
    font-family: ${props => props.theme.fontFamily};
} 

svg {
    color : ${props => props.theme.dark ? "rgb(40,40,40)" : "white"};
}
  a {
      text-decoration: none;
  }
  strong {
      font-weight: bold;
  }

  i {
      font-style: italic;
  }
  h3 {
      font-size: 1.3em;
  }
  h2 {
      font-size: 1.5em;
  }
  h1 {
      font-size: 2em;
  }

  td, .border-left, .border-top, .border-right, .border-bottom, .border {
      border-color: rgba(${props => props.theme.dark ? '0,0,0' : '255,255,255'}, .2);
      border-style: solid;
  }
  td , .border {
      border-width: 1px;
  }
  td , pre {
      padding: 20px;
  }
  pre {
      background: linear-gradient(rgb(20,0,20), rgb(0,20,20));
      overflow: scroll;
  }
  code {
    color : white;
    font-family: Roboto;
    line-height: 2;
   
}
`

// later in your app
export default GlobalStyle;