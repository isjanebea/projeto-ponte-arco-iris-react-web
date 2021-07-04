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
    max-width : 350px;
    border: 1px ${props => props.theme.color.borderCard} solid;
    border-radius: 5px 5px 5px 5px;
    padding: 10px;
    color: ${props => props.theme.color.cardColor};
    background: linear-gradient(to left, ${props => props.theme.color.bgCard + " , " + props.theme.color.bgCard2 });

    @media(max-width: 425px) {
        flex-direction: column;
        position: relative;
        width: 375px;
      }

`

const ButtonBar = styled.div`
      display: flex;
      justify-content: space-between;
      aligm-items: center;
      @media(max-width: 415px) {
            flex-direction: column-reverse;
            .label-location {
                margin-bottom: 10px;
                justify-content: center;
                
            }
      }
`

const Container = styled.div`
      background: {${props => props.color ? props.color : props.theme.color.bg }}
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
    Container
}