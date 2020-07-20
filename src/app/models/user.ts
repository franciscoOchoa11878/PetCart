export interface Rol{
    cliente?: boolean;
    admin?: boolean;
}
export interface UserInterface{
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    rol: Rol;
}