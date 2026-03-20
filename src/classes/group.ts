export interface GroupProps {
    id: string
    name: string
}

export class Group {
    constructor(private groupProps: GroupProps) {}

    get id(): string {
        return this.groupProps.id
    }

    get name(): string {
        return this.groupProps.name
    }

    changeName(newName: string) {
        this.groupProps.name = newName
    }
}