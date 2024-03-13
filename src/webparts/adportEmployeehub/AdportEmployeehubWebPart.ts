import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'AdportEmployeehubWebPartStrings';
import AdportEmployeehub from './components/AdportEmployeehub';
import { IAdportEmployeehubProps } from './components/IAdportEmployeehubProps';
import { IODataList } from '@microsoft/sp-odata-types';
import { ISPHelper } from '../../helpers/ISPhelper';
import { SPHelpers } from '../../helpers/SPhelpers';
export interface IAdportEmployeehubWebPartProps {
  userMasterList: string;
}

export default class AdportEmployeehubWebPart extends BaseClientSideWebPart<IAdportEmployeehubWebPartProps> {

  private dropdownOptions: IPropertyPaneDropdownOption[];
  private spHelper:ISPHelper;
  public render(): void {
    const element: React.ReactElement<IAdportEmployeehubProps> = React.createElement(
      AdportEmployeehub,
      {
        userMasterList: this.properties.userMasterList,
        webpartContext:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }
  protected async onInit(): Promise<void> {
    this.spHelper = new SPHelpers(this.context.spHttpClient);
    const options = await this.fetchOptions();
    this.dropdownOptions = options;
  }
  private async fetchOptions(): Promise<IPropertyPaneDropdownOption[]> {
    const url = this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$select=Title,Id&$filter=Hidden eq false`;
    const response = await this.spHelper.getListData(url);
    const options: Array<IPropertyPaneDropdownOption> = new Array<IPropertyPaneDropdownOption>();
    response.value.map((list: IODataList) => {
      options.push({ key: list.Title, text: list.Title });
    });
    return options;
  }
  protected onPropertyPaneConfigurationStart(): void {

  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    if (newValue) {
      switch (propertyPath) {
        case 'userMasterList': this.properties.userMasterList = newValue; break;
      }
      // push new list value
      super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
      // refresh the item selector control by repainting the property pane
      this.context.propertyPane.refresh();
      // re-render the web part as clearing the loading indicator removes the web part body
      this.render();
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('userMasterList', {
                  label: 'Select User Master list',
                  options: [...this.dropdownOptions]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
