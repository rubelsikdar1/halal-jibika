import Style from "./JobDetails.module.css";

const JobDetails = () => {
  return (
    <div className={Style.bg}>
      <div className={`${Style.top} container`}>
        <div className={Style.mainBox}>
          <div className={Style.heading}>
            <div className={Style.left}>
              <h1>lorem1000</h1>
              <h3>kkkkkkk</h3>
            </div>
            <div className={Style.left}>
                <img className={Style.img} src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww" alt="" />
            </div>
          </div>
          <div className={Style.date}>
            <p>
              {" "}
              Apply last date : <b> 7/10/24</b>{" "}
            </p>
            <p></p>
            <hr />
          </div>
          <div className={Style.boxOuter}>
            <div className={Style.innerBox}>
              <h2>Summary</h2>
              <div className={Style.innerSummary}>
                <div className={Style.SummaryItem}>
                  <p>Vacancy : </p>
                  <p>
                    Salary: Tk. <b>20000 - 24000</b>
                  </p>
                  <p>
                    <b>(Monthly)</b>
                  </p>
                </div>
                <div className={Style.SummaryItem}>
                  <p>Age: 23 to 30 years </p>
                  <p>Experience: At least 1 year(s)</p>
                </div>
                <div className={Style.SummaryItem}>
                  <p>
                    Location : <b>Dhaka</b>{" "}
                  </p>
                  <p>Published on: 30 Dec 2023</p>
                </div>
              </div>
            </div>
            <div className={Style.innerBox}>
              <h2>Job Responsibilities & Context</h2>
              <div className={Style.dic}>
                <p>
                  {" "}
                  <br />
                  We are looking for a female "Executive Assistant" for a
                  well-known Bilateral Chamber Hard-working and energetic.
                  Expert in internet browsing. Conduct special studies and
                  present briefs, and reports. Preparation of draft of various
                  letters, and emails as per instruction. Maintain and update
                  records, files, and documents in an organized manner. Taking
                  notes of the board meetings and composition of office memos,
                  reports, etc. as per instruction. Writing of meeting minutes.
                  Composition and compilation of news for publication of the
                  newsletter. Dealing with incoming and outgoing correspondence.
                </p>
              </div>
              <hr />
              <h2>Experience Requirements</h2>
              <p>At least 1 year(s)</p>
              <h2>Educational Requirements</h2>
              <p>
                Graduate in any discipline preferably in Economics/Business.
              </p>
              <h2>Additional Requirements</h2>
              <ul>
                <li>Age 23 to 30 years</li>
                <li>
                  Skills Required: MS Word, Excel, PowerPoint Communication
                  skills: fluency in English (both written and spoken)
                  Efficiency in Bangla and English typing Good interpersonal
                  skills
                </li>
              </ul>
            </div>
            <div className={Style.innerBox}>
              <h2>Apply Procedure</h2>
              <div className={Style.btns}>
                <button className={Style.btn}> Apply Now </button>
              </div>
              <h2>Email your CV</h2>
              <p>indobangla12@gmail.com</p>
              <p>
                Application Deadline: <b> 7 Jan 2024 </b>{" "}
              </p>
            </div>

            <div className={Style.innerBox}>
              <h2>Company Information</h2>
              <p>IBCCI (India-Bangladesh Chamber of Commerce & Industry)</p>
              <p>
                Rupayan Centre (16th floor) - 72, Mohakhali C/A, Dhaka-1212,
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
