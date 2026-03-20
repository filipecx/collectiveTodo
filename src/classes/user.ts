export interface UserProps {
    id: string
    username: string
    password: string
}

export class User {
    constructor (private userProps: UserProps) {

    }

    get id(): string {
        return this.userProps.id
    }

    get name(): string  {
        return this.userProps.username
    }

    get password(): string {
        return this.userProps.password
    }

    changeName(newName: string): string {
        this.userProps.username = newName
        return this.userProps.username
    }
}