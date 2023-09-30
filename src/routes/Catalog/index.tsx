import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.00,
  catories: [{id:2, name:"Eletrônicos"}, {id: 3, name: "Computadores"},{id: 4, name: "Cinema"}]
}

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
          </div>

          <ButtonNextPage buttonText="Load More"/>
        </section>
      </main>
    </>
  );
}
