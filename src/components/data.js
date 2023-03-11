import React from 'react';
import  {DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from 'primereact/dropdown';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { useState } from 'react';
import { FilterMatchMode,FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';


function Data(){
    
    const data = [
        { id: 1,
            title: "iPhone 9",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple"
        },
        { id: 2,
            title: "iPhone X",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple"
        },
        { id: 3,
            title: "Samsung Universe 9",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung"
        },
        { id: 4,
            title: "OPPOF19",
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones"
        },
        { id: 5,
            title: "Huawei P30",
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones"
        },
        { id: 6,
            title: "MacBook Pro",
            price: 1749,
            discountPercentage: 11.02,
            rating: 4.57,
            stock: 83,
            brand: "Apple"
        },
        { id: 7,
            title: "Samsung Galaxy Book",
            price: 1499,
            discountPercentage: 4.15,
            rating: 4.25,
            stock: 50,
            brand: "Samsung"},
        { id: 8,
            title: "Microsoft Surface Laptop 4",
            price: 1499,
            discountPercentage: 10.23,
            rating: 4.43,
            stock: 68,
            brand: "Microsoft Surface"},
        { id: 9,
            title: "Infinix INBOOK",
            price: 1099,
            discountPercentage: 11.83,
            rating: 4.54,
            stock: 96,
            brand: "Infinix",
            category: "laptops"},
        { id: 10,
            title: "HP Pavilion 15-DK1056WM",
            price: 1099,
            discountPercentage: 6.18,
            rating: 4.43,
            stock: 89,
            brand: "HP Pavilion"
        },
        
      ];

      const[filters, setFilters] = useState({
        global:{value: null, matchMode: FilterMatchMode.CONTAINS},
        brand: { value: null, matchMode: FilterMatchMode.CONTAINS },
      });

      const [selectedBrand, setSelectedBrand] = useState(null);
      

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [brands] = useState(['Apple', 'Samsung', 'HP Pavilion', 'Infinix', 'Microsoft Surface']);    
    
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
   

    const statusBodyTemplate = (rowData) => {
        return <Tag value={data.brand}  />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option}  />;
    };
    
    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={brands} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };
    
      return(
        <>
            <h1>First Task</h1>           

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 2, sm: 2, md: 4 }}
                    >
                    <InputText onInput={(e) => setFilters({
                        global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
                    })}/>
                   
                </Stack>

                <DataTable value={data} filters={filters} filterDisplay="row" globalFilterFields={['title','brand']}  emptyMessage="No data found."
                paginator
                rows={3}
                >
                    <Column field='id' header="ID" sortable />
                    <Column field='title' header="Title" sortable />
                    <Column field='price' header="Price" sortable />
                    <Column field='discountPercentage' header="Discount %" sortable />
                    <Column field='rating' header="Rating" sortable />
                    <Column field='brand' header="Brand" filter filterElement={statusRowFilterTemplate} />                   
                </DataTable>                  
           
            </>
      )
}

export default Data;