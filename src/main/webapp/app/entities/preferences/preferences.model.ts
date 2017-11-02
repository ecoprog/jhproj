import { BaseEntity, User } from './../../shared';

export const enum Units {
    'kg',
    'lb'
}

export class Preferences implements BaseEntity {
    constructor(
        public id?: number,
        public weightUnits?: Units,
        public weeklyGoal?: number,
        public user?: User,
    ) {
    }
}
