import { UserMasterResponse } from "../model/SPResponse";

export interface ISPHelper {
    getListData(url: string):Promise<any>;
    getUserMaster(props: any, email: string, noofRecords: number): Promise<UserMasterResponse>
}