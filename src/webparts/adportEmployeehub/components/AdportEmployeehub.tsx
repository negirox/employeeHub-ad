import * as React from 'react';
import styles from './AdportEmployeehub.module.scss';
import { IAdportEmployeehubProps } from './IAdportEmployeehubProps';
import { IAdportEmployeeHubState } from './IAdPortEmployeeHubState';
import { ISPHelper } from '../../../helpers/ISPhelper';
import { UserMaster, UserMasterResponse } from '../../../model/SPResponse';
import { SPHelpers } from '../../../helpers/SPhelpers';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Utility } from '../../../helpers/Utility';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
/* const EmployeeHubCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://example.com/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}; */
export default class AdportEmployeehub extends React.Component<IAdportEmployeehubProps, IAdportEmployeeHubState> {

  private _spHelper: ISPHelper;
  constructor(props: IAdportEmployeehubProps) {
    super(props);
    this.state = {
      UserData: null,
      loading: true,
      isAnniversary: false,
      isBirthday: false,
      renderData: [],
      anniverSaries: [],
      birthdays: [],
      newJoiners: []
    }
    this._spHelper = new SPHelpers(this.props.webpartContext.spHttpClient);
  }
  async componentDidMount(): Promise<void> {
    const ConfigUrl = `${this.props.webpartContext.pageContext.web.absoluteUrl}/_api/web/lists/GetByTitle('${this.props.userMasterList}')/Items?$top=4999`;
    const userMasterData: UserMasterResponse = await this._spHelper.getListData(ConfigUrl);
    console.log(userMasterData);
    this.RenderUserData(userMasterData);
  }
  private RenderUserData(userMasterData: UserMasterResponse): void {
    if (userMasterData.value.length === 0) {
        return;
    }

    const birthDays: UserMaster[] = [];
    const anniversaries: UserMaster[] = [];
    const newJoiners: UserMaster[] = [];

    userMasterData.value.forEach(respo => {
        if (this.CheckDate(respo.DateOfJoining, this.props.noOfDaysForAnniversary)) {
            anniversaries.push({ ...respo });
        }
        if (this.CheckDate(respo.DateOfBirth, this.props.noOfDaysForBirthday)) {
            birthDays.push({ ...respo });
        }
        if (this.CheckNewJoiners(respo.DateOfJoining, this.props.noOfDaysForNewJoiners)) {
            newJoiners.push({ ...respo });
        }
    });

    const renderData = Utility.chunkArray([...birthDays], 3);
    this.setState({
        anniverSaries: anniversaries,
        newJoiners: newJoiners,
        birthdays: birthDays,
        renderData: renderData,
        loading: false
    });

    setTimeout(() => {
        const element = document.getElementById('BirthDays');
        if (element) {
            element.parentElement.style.background = '#218BC9';
            element.style.color = 'white';
        }
    }, 600);
}

  private CheckDate(date: string, lastDays: number): boolean {
    const currentDate = new Date();
    currentDate.setFullYear(0);
    currentDate.setHours(0, 0, 0, 0);
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(currentDate.getDate() - lastDays);
    fifteenDaysAgo.setHours(0, 0, 0, 0);
    fifteenDaysAgo.setFullYear(0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setFullYear(0);
    return (d.getTime() >= fifteenDaysAgo.getTime() && d.getTime() <= currentDate.getTime());

    
  }
  private CheckNewJoiners(date: string, lastDays: number): boolean {
    const currentDate = new Date();
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(currentDate.getDate() - lastDays);
    const d = new Date(date);
    return (d >= fifteenDaysAgo && d <= currentDate);
  }
  /*   private CheckDate(date: string): boolean {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return (d.getDate() === currentDate.getDate()) && (d.getMonth() === currentDate.getMonth());
    } */
    private ShowSlide(slideName: string, divId: string, anotherDivIds: string[]): void {
      // Update current slide styles
      const currentElement = document.getElementById(divId);
      currentElement.parentElement.style.background = '#218BC9';
      currentElement.style.color = 'white';
  
      // Reset styles for other slides
      for (const id of anotherDivIds) {
          const otherElement = document.getElementById(id);
          otherElement.parentElement.style.background = 'lightgrey';
          otherElement.style.color = 'black';
      }
  
      // Set state based on slideName
      let renderData = [];
      switch (slideName) {
          case 'BirthDays':
              renderData = Utility.chunkArray([...this.state.birthdays], 3);
              break;
          case 'WorkAnniverSary':
              renderData = Utility.chunkArray([...this.state.anniverSaries], 3);
              break;
          case 'NewJoiners':
              renderData = Utility.chunkArray([...this.state.newJoiners], 3);
              break;
          default:
              break;
      }
  
      this.setState({ renderData });
  }
  
  public render(): React.ReactElement<IAdportEmployeehubProps> {
    return (
      <section className={styles.adportEmployeehub}>
        {
          this.state.loading &&
          <Spinner label="Loading Employee Hub..." size={SpinnerSize.large} />
        }
        {
          !this.state.loading && <div>
            <div className={styles.firstDiv}>
              <div className={styles.secondDiv}>
                Employee Hub</div>
              <div className={styles.thirdDiv}>
              </div>
              <div className={styles.eightDiv}>
              </div>

              <div className={styles.twentyfourDiv}>
                <div className={styles.twentysixDiv}>
                  <Carousel indicators={false}>
                    {
                      !this.state.loading && this.state.renderData.map((cItem: UserMaster[]) => {
                        return (<Carousel.Item>
                          {
                            cItem.map(x => {
                              return (
                                <div className={styles.thirtyoneDiv}>
                                  <div className={styles.thirtytwoDiv}>
                                    <div className={styles.thirtythreeDiv}>
                                    </div>
                                    <div className={styles.thirtyfourDiv}>
                                      <img className={styles.profile} src={`/_layouts/15/userphoto.aspx?size=L&accountname=${x?.UserEmail}`} />
                                    </div>
                                  </div>
                                  <div className={styles.thirtyfiveDiv}>
                                    {x.UserFullName}</div>
                                  <div className={styles.thirtysixDiv}>
                                    {x.JobTitle}</div>
                                  <div className={styles.thirtysevenDiv}>
                                    <div className={styles.thirtyeightDiv}>
                                      Send Wish</div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </Carousel.Item>

                        )
                      })
                    }
                  </Carousel>
                </div>
                <div className={styles.sixtytwoDiv}>
                  <span className={styles.sixtythreeDiv}>Stay</span>
                  <span className={styles.sixtyfourDiv}>
                    Connected</span>
                </div>
                <div className={styles.sixtysixDiv}>
                  <div className={styles.sixtysevenDiv}>
                    <div className={styles.sixtynineDiv} id='BirthDays' onClick={() => {
                      this.ShowSlide('BirthDays', 'BirthDays', ['WorkAnniverSary', 'NewJoiners'])
                    }}>
                      Birthdays
                    </div>
                  </div>
                  <div className={styles.seventyDiv}>

                    <div className={styles.seventyfourDiv} id='WorkAnniverSary' onClick={() => {
                      this.ShowSlide('WorkAnniverSary', 'WorkAnniverSary', ['BirthDays', 'NewJoiners'])
                    }}>
                      Work Anniversaries</div>
                  </div>
                  <div className={styles.seventyfiveDiv}>
                    <div className={styles.eightyoneDiv} id='NewJoiners' onClick={() => {
                      this.ShowSlide('NewJoiners', 'NewJoiners', ['BirthDays', 'WorkAnniverSary'])
                    }}>
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
          </div>
        }
      </section>
    );
  }
}
