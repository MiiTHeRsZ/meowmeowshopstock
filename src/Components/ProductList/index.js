import { Tab, Tabs } from '@mui/material';
import './ProductList.css';
import { useState } from 'react';
import AllProduct from './AllProduct';
import ActiveProduct from './ActiveProduct';
import InactiveProduct from './InactiveProduct';

const ProductList = () => {
    const [subMenu, setSubMenu] = useState('all');

    return (
        <div className='product-list'>
            <Tabs value={subMenu} onChange={(evt, newSubMenu) => { setSubMenu(newSubMenu) }} sx={{ position: 'sticky', top: 72.1, bgcolor: '#FFF' }}>
                <Tab label="Todos" value="all" />
                <Tab label="Ativos" value="active" />
                <Tab label="Inativos" value="inactive" />
            </Tabs>
            {subMenu === "all" && <AllProduct />}
            {subMenu === "active" && <ActiveProduct />}
            {subMenu === "inactive" && <InactiveProduct />}
        </div>
    );
}

export default ProductList;