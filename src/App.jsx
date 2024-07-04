import { Header } from "./modules/Header/Header";
import { Hero } from "./modules/Hero/Hero";
import { Filter } from "./modules/Filter/Filter";
import { Goods } from "./modules/Goods/Goods";
import { Subscribe } from "./modules/Subscribe/Subscribe";
import { Footer } from "./modules/Footer/Footer";
import { Order } from "./modules/Order/Order";

export const App = () => {
  
  return (
  <>
  <Header/>

  <main>

    <Hero/>

    <Filter/>

    <Goods/>

    <Subscribe/>

  </main>

  <Footer/>

  <Order/>
    </>
  )
}

