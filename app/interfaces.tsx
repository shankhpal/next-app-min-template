export interface UserObj{
    id: number,
    name: string,
    username: string,
    email: string,
    address: Record<string, unknown>,
    phone: string,
    website: string,
    company: Record<string, unknown>
}