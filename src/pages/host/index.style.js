import styled from 'styled-components';


const ListGroup = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const List = styled.div`
    display: flex;
    width: 100%;
`
const ListItem = styled.li`
    padding: 10px
`
// colocar um icone de mapa e o endereco
const Card = styled.section`
    
    border: 1px ${props => props.theme.color.borderCard} solid;
    border-radius: 5px 5px 5px 5px;
    padding: 10px;
    color: ${props => props.theme.color.cardColor};
    background: linear-gradient(to left, ${props => props.theme.color.bgCard + " , " + props.theme.color.bgCard2});

    @media(min-width: 720px) {
        max-width : 350px;
    }
    @media(max-width: 425px) {
        flex-direction: column;
        position: relative;
        width: 100%;
      }

`

const LabelLocation = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    @media(max-width: 415px) {
        margin-bottom: 20px;
  }
`
const ButtonBar = styled.div`
      display: flex;
      align-itens: center;
      justify-content: space-between;
      @media(max-width: 415px) {
            flex-direction: column-reverse;
            justify-content: center;
      }
`

const Container = styled.div`
      background: ${props => props.color ? props.color : props.theme.color.bg};
      align-items: center;
      display: flex;
      
`

const CardHeader = styled.div`
    padding : 10px;
    border-bottom: 1px rgba(127,127,127,0.5) solid;
`

const FilterComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px rgba(0,0,0,0.1) solid;
    padding: 10px;
`


export {
    ListGroup,
    List,
    ListItem,
    ButtonBar,
    CardHeader,
    FilterComponent,
    Card,
    Container,
    LabelLocation 
}