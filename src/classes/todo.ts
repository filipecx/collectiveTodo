import { User } from "./user"

export interface TodoProps {
    id: string
    title: string
    completed: boolean
    dueTo: Date
    groupId: string
    assignedMemberId?: string
}

export class Todo {
    constructor(private todoProps: TodoProps) {
    }

    get id(): string {
        return this.todoProps.id
    }

    get title(): string {
        return this.todoProps.title
    }

    get completed(): boolean {
        return this.todoProps.completed
    }

    get dueTo(): Date {
        return this.todoProps.dueTo
    }

    get assignedMemberId(): string | void{
        return this.todoProps.assignedMemberId
    }

    changeAssignedMember(newId: string) {
        this.todoProps.assignedMemberId = newId
    }

    changeDueDate(newDate: Date) {
        this.todoProps.dueTo = newDate
    }
}

