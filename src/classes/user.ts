export interface UserProps {
    id: string
    name: string
    password: string
}

export class User {
    constructor (private userProps: UserProps) {

    }

    get id(): string {
        return this.userProps.id
    }

    get name(): string  {
        return this.userProps.name
    }

    get password(): string {
        return this.userProps.password
    }

    changeName(newName: string): string {
        this.userProps.name = newName
        return this.userProps.name
    }
}