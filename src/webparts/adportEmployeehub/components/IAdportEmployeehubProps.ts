import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IAdportEmployeehubProps {
  userMasterList: string;
  webpartContext:WebPartContext;
  noOfDaysForBirthday:number,
  noOfDaysForAnniversary:number,
  noOfDaysForNewJoiners:number,
}
