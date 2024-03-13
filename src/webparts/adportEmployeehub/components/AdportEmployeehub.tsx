import * as React from 'react';
import styles from './AdportEmployeehub.module.scss';
import { IAdportEmployeehubProps } from './IAdportEmployeehubProps';
import { IAdportEmployeeHubState } from './IAdPortEmployeeHubState';
import { ISPHelper } from '../../../helpers/ISPhelper';
import { UserMaster, UserMasterResponse, UserProfileProps } from '../../../model/SPResponse';
import { SPHelpers } from '../../../helpers/SPhelpers';

export default class AdportEmployeehub extends React.Component<IAdportEmployeehubProps, IAdportEmployeeHubState> {

  private _spHelper: ISPHelper;
  constructor(props: IAdportEmployeehubProps) {
    super(props);
    this.state = {
      UserData: null,
      loading: true,
      isAnniversary: false,
      isBirthday: false,
      anniverSaries: [],
      birthdays: [],
      newJoiners: []
    }
    this._spHelper = new SPHelpers(this.props.webpartContext.spHttpClient);
  }
  async componentDidMount(): Promise<void> {
    const userMasterData: UserMasterResponse = await this._spHelper.getUserMaster(this.props, this.props.webpartContext.pageContext.user.email, 1);
    console.log(userMasterData);
    const userPropertiesURL = this.props.webpartContext.pageContext.web.absoluteUrl + `/_api/SP.UserProfiles.PeopleManager/GetMyProperties`;
    const userProperties: UserProfileProps = await this._spHelper.getListData(userPropertiesURL);
    console.log(userProperties);
    this.RenderUserData(userMasterData);
  }
  private RenderUserData(userMasterData: UserMasterResponse): void {
    if (userMasterData.value.length > 0) {
      const birthDays: UserMaster[] = [];
      const anniverSaries: UserMaster[] = [];
      const newJoiners: UserMaster[] = [];
      userMasterData.value.forEach(respo => {
        const isAnniversary = this.CheckDate(respo.DateOfJoining);
        const isBirthday = this.CheckDate(respo.DateOfBirth);
        const isNewJoiners = this.CheckNewJoiners(respo.DateOfJoining);
        if (isAnniversary) {
          anniverSaries.push({ ...respo });
        }
        if (isBirthday) {
          birthDays.push({ ...respo });
        }
        if (isNewJoiners) {
          newJoiners.push({ ...respo });
        }
      });
      this.setState({
        anniverSaries: anniverSaries,
        newJoiners: newJoiners,
        birthdays: birthDays,
        loading: false
      })
    }
  }
  private CheckNewJoiners(date: string): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(currentDate.getDate() - 15);
    fifteenDaysAgo.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return (d.getTime() >= fifteenDaysAgo.getTime() && d.getTime() <= currentDate.getTime());
  }
  private CheckDate(date: string): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return (d.getDate() === currentDate.getDate()) && (d.getMonth() === currentDate.getMonth());
  }
  public render(): React.ReactElement<IAdportEmployeehubProps> {
    return (
      <section className={styles.adportEmployeehub}>
        <div className={styles.firstDiv}>
          <div className={styles.secondDiv}>
            Employee Hub</div>
          <div className={styles.thirdDiv}>
          </div>
          <div className={styles.fourDiv}>
            <div className={styles.fiveDiv}>
              <div className={styles.sixDiv}>
                <div className={styles.sevenDiv}>
                  Share your happiness </div>

              </div>
            </div>
          </div>
          <div className={styles.eightDiv}>
          </div>
          <div className={styles.twentyfourDiv}>
            <div className={styles.twentyfiveDiv}>
            </div>
            <div className={styles.twentysixDiv}>
              <div className={styles.twentysevenDiv}>
                <div className={styles.twentynineDiv}>
                </div>
              </div>
              <div className={styles.thirtyDiv}>
                <div className={styles.thirtyoneDiv}>
                  <div className={styles.thirtytwoDiv}>
                    <div className={styles.thirtythreeDiv}>
                    </div>
                    <div className={styles.thirtyfourDiv}>
                    </div>
                  </div>
                  <div className={styles.thirtyfiveDiv}>
                    Hanin Linah Al Zaid</div>
                  <div className={styles.thirtysixDiv}>
                    CRM Technical Consultant</div>
                  <div className={styles.thirtysevenDiv}>
                    <div className={styles.thirtyeightDiv}>
                      Send Wish</div>
                    <div className={styles.thirtynineDiv}>
                    </div>
                  </div>
                </div>
                <div className={styles.fourtyDiv}>
                  <div className={styles.fourtyoneDiv}>
                    <div className={styles.fourtytwoDiv}>
                    </div>
                    <div className={styles.fourtythreeDiv}>
                    </div>


                  </div>
                  <div className={styles.fourtyfourDiv}>
                    Mahbub Nashwan</div>
                  <div className={styles.fourtyfiveDiv}>
                    CRM Technical Consultant</div>
                  <div className={styles.fourtysixDiv}>
                    <div className={styles.fourtysevenDiv}>
                      Send Wish</div>
                    <div className={styles.fourtyeightDiv}>
                    </div>
                  </div>
                </div>
                <div className={styles.fourtynineDiv}>
                  <div className={styles.fiftyDiv}>
                    <div className={styles.fiftyoneDiv}>
                    </div>
                    <div className={styles.fiftytwoDiv}>
                    </div>

                  </div>
                  <div className={styles.fiftythreeDiv}>
                    Mahbub Nashwan</div>
                  <div className={styles.fiftyfourDiv}>
                    CRM Technical Consultant</div>
                  <div className={styles.fiftyfiveDiv}>
                    <div className={styles.fiftysixDiv}>
                      Send Wish</div>
                    <div className={styles.fiftysevenDiv}>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.fiftyeightDiv}>
                <div className={styles.sixtyDiv}>
                </div>
              </div>
            </div>
            <div className={styles.sixtytwoDiv}>
              <span className={styles.sixtythreeDiv}>Stay</span>
              <span className={styles.sixtyfourDiv}>
                Connected</span></div>
            <div className={styles.sixtyfiveDiv}></div>
            <div className={styles.sixtysixDiv}>
              <div className={styles.sixtysevenDiv}>
                <div className={styles.sixtynineDiv}>
                  Birthdays</div>
              </div>
              <div className={styles.seventyDiv}>
                
                <div className={styles.seventyfourDiv}>
                  Work Anniversaries</div>
              </div>
              <div className={styles.seventyfiveDiv}>
                
                <div className={styles.eightyoneDiv}>
                  New Joiners</div>
              </div>
              <div className={styles.eightytwoDiv}>
                <div className={styles.eightyfourDiv}>
                  Others</div>
              </div>
            </div>
            <div className={styles.eightyfiveDiv}>
              <div className={styles.eightysixDiv}>
                Share your happiness </div>
              <div className={styles.eightysevenDiv}>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
