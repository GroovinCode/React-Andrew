import styled from "styled-components";

export const ProductCard = styled.div`
display: inline-grid;
grid-template-columns: 200px;
grid-template-rows: auto;
grid-template-areas:
  "Image"
  "Content";                   
box-sizing: border-box;
border: 2px solid blue;
border-radius: 5px;
margin: 1em;
padding: 1em;
object-fit: contain;
`;

export const Image = styled.div`
  grid-area: Image;
`;

export const Content = styled.div`
  grid-area: Content;
`;

export function Item(props) {
  let {pdata} = props;

  return(
  <>
    {pdata.map((id, title) => ( 
      <ProductCard>
        <div>
        <Image>
          <img src={id.image} width='100px' height='100'  alt='Product' key={id}/>
        </Image>
              
        <Content>           
          <p key={title}>{id.title}</p> 
          <p key={id}>${id.price.toFixed(2)}</p>        
        </Content>
        </div>
      </ProductCard>
    ))}
  </>
  )
}  