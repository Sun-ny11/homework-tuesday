import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.map(el => el).sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                return action.payload === "up"
                    ? (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
                    : (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0
            })

            // need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload )
            // need to fix
        }
        default:
            return state
    }
}
