import styled from 'styled-components';

export const NavDiv = styled.div`
display: flex;
min-width: 1200px;
background-color: #fff;
color: #555f66;
padding: 10px 10px;
justify-content: space-between;
align-items: center;
text-decoration: none;
height: 2rem;
line-height: 3em;
// position: fixed;
top: 0;
width:auto;
z-index: 10000;
box-shadow: 0 0 0.1em 0 rgba(0, 0, 0, 0.25);

a{
    text-decoration: none;
    color: #555f66;
}

a:hover{
    color: #629DD1;
}

ul{
display: flex;
}

h3, li{
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 25px;
 padding: 0px 10px;
    list-style:none;
    margin-right: 1.2rem;
    // color: #555f66;
}


ul > li a {
    
    color: #555f66;
    
    text-decoration: none;
}
ul > li a:hover {
    
    color: #629DD1;
`


export const FootDiv = styled.div `
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 1200px;
  width: 100%;
  background: #f8f8f8;
  padding: .8em 0;

  .container{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-top:auto;
    width: 60%;
  }

  ul.alt {
    list-style: none;
    padding-left: 0;
    font-size: 0.8rem;
}

.check{
    color:black;
}

ul.icons {
    cursor: default;
    list-style: none;
    padding-left: 0;
}

.containerLow{
    display: flex;
    align-items: center;
    width: 80%;
    flex-direction: row;
}

.copyright {
    color: black;
    font-size: 0.9em;
    margin: 1em 0 0 0;
    padding: 0;
    text-align: center;
}

.copyright li {
    border-left: solid 1px rgba(144, 144, 144, 0.25);
    display: inline-block;
    list-style: none;
    margin-left: 1.5em;
    padding-left: 1.5em;
}

.copyright li a{
        color: black;
        text-decoration: underline;
}

.copyright li a:hover{
    color: #629DD1;
    text-decoration: underline;
}
`