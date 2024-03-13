import {
    SPHttpClient, SPHttpClientResponse
} from '@microsoft/sp-http';
import { UserMasterResponse } from '../model/SPResponse';
import { ISPHelper } from './ISPhelper';
import { postheaders, putHeaders } from '../model/SPConstants';

export class SPHelpers implements ISPHelper {
    private _client: SPHttpClient;
    private _clientConfig = SPHttpClient.configurations.v1;
    constructor(client: SPHttpClient) {
        this._client = client;
    }
    public async getListData(url: string):Promise<any> {
        const response = await this._client.get(url, this._clientConfig);
        return await response.json();
    }
    public async setListData(url: string, postData: string): Promise<SPHttpClientResponse> {
        const headers = { ...postheaders }
        headers.body = postData;
        const response = await this._client.post(url, this._clientConfig, headers);
        return response;
    }
    public async putListData(url: string, postData: string): Promise<SPHttpClientResponse> {
        const headers = { ...putHeaders }
        headers.body = postData;
        const response = await this._client.post(url, this._clientConfig, headers);
        return response;
    }
    public async getUserMaster(props: any, email: string, noofRecords: number): Promise<UserMasterResponse> {
        const { filterCondition, selectedColumns, records, orderByColumn } = this._getUserMasterConfigurations(noofRecords, email);
        const ConfigUrl = `${props.webpartContext.pageContext.web.absoluteUrl}/_api/web/lists/GetByTitle('${props.userMasterList}')/Items?$filter=${filterCondition}&$select=${selectedColumns}${records}&$orderby=${orderByColumn}`;
        return await this.getListData(ConfigUrl);
    }
 
    private _getUserMasterConfigurations(noofRecords: number, email: string): { filterCondition: string; selectedColumns: string; records: string; orderByColumn: string; } {
        const records = `&$top=${noofRecords}`;
        const selectedColumns = `Title,Id,Department,UserCluster,UserFullName,UserEmail,UserOperationCompany,Unit,Division,Location,JobTitle,DateOfJoining,DateOfBirth,ContractType,ContractExpiryDate,AccountExpiryDate,LineManagerName,LineManagerEmail,UserHasReportee`;
        const filterColumn = 'Title';
        const filterType = 'eq';
        const filterValue = email;
        const filterCondition = `${filterColumn} ${filterType} '${filterValue}'`;
        const orderByColumn = `Id desc`;
        return { filterCondition, selectedColumns, records, orderByColumn };
    }

}