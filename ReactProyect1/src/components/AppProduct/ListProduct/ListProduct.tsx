import { FC } from "react";

interface ItemProduct {
    precio:number,
    imagen:string,
    nombre:string,
}

interface IPropsListProducts{
    arrItems: ItemProduct[];
}


export const ListProduct: FC<IPropsListProducts> = ({arrItems}) => {
    return (
        <div>
            
        </div>
    )
}
