import { UserMaster } from "../../../model/SPResponse";

export interface IAdportEmployeeHubState{
    UserData:UserMaster;
    loading:boolean;
    isAnniversary:boolean;
    isBirthday:boolean;
    birthdays:UserMaster[];
    anniverSaries:UserMaster[];
    newJoiners:UserMaster[];
}