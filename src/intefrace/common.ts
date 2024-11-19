export type InformationCardProps = {
    header: string,
    content: string,
    image: string
}

export type CustomNavLinkProps = {
    description : string,
    path: string
}

export type BookingViewProps = {
    coverImage: string
    header: string
    properties: any
    additional: string[]
    availableDate: string
    price: number
}


export type IconProperty = {
    image: string
    name: string
}