export const color =[
    "White",
    "Black",
    "Red",
    "marun",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white", label:"White"},
            {value:"beige", label:"Beige"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"Brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ]
    }
];
export const singleFilters=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"0-100", label:"0 to 100"},
            {value:"100-200", label:"100 to 200"},
            {value:"200-300", label:"200 to 300"},
            {value:"300-400", label:"300 to 400"},
            {value:"400-500", label:"400 to 500"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10", label:"10% And Above"},
            {value:"20", label:"20% And Above"},
            {value:"30", label:"30% And Above"},
            {value:"40", label:"40% And Above"},
            {value:"50", label:"50% And Above"},
            {value:"60", label:"60% And Above"},
            {value:"70", label:"70% And Above"},
            {value:"80", label:"80% And Above"},

        ]
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out Of Stock"}
        ]
    }
];
export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
  ];