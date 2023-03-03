export interface WrapperProps {
    children: React.ReactNode;
}

export interface gnbType {
    activeItem: string;
}

export interface itemType {
    item: Array<dataType>;
}

export interface listType {
    list: Array<dataType>;
}

export interface dataType {
    id?: number;
    brand?: string;
    image_link?: string;
    name?: string;
    price?: number;
    product_type?: string;
    category?: string;
    description?: string;
    updated_at?: string;
    product_link?: string;
}