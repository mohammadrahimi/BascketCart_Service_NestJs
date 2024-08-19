import { Bascket } from "src/Domain/bascket";

export interface IRepositoryRedis {
    Get(key: string): Promise<string>;
    Save(key: string, value: string): Promise<void>;
    Delete(key: string): Promise<void>;
}