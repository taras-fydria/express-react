import {Repository, getRepository, EntityTarget} from 'typeorm';

export default abstract class ProjectController<T> {
    private _entity: EntityTarget<T>

    protected constructor(entity: EntityTarget<T>) {
        this.entity = entity
    }

    private set entity(value: EntityTarget<T>) {
        this._entity = value;
    }

    private get entity(): EntityTarget<T> {
        return this._entity;
    }

    protected get repository(): Repository<T> {
        return getRepository<T>(this.entity);
    }
}
