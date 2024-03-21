import ProductList from './Components/ProductList';
import { HomeRounded, Inventory2Rounded } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState('home');

  return (
    <>
      <Tabs value={menu} onChange={(evt, newMenu) => { setMenu(newMenu) }} sx={{ position: 'sticky', top: 0, bgcolor: '#FFF' }} centered>
        <Tab label="Inicio" value="home" icon={<HomeRounded />} />
        <Tab label="Produtos" value="product" icon={<Inventory2Rounded />} />
      </Tabs>
      {menu === "product" && <ProductList />}
    </>
  );
}

export default App;
