
import styles from "./JobApplication.module.css";

const JobApplication = () => {
  const educationOptions = [
    "High School",
    "Bachelor’s Degree",
    "Master’s Degree",
  ];
  return (
    <div className={styles.jobApplication}>
      <h2>Apply for This Jobs</h2>
      <form>
        <div>
          <label>
            Full Name:<input type="text" required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" required />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            Immunizations:
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            Educational Attainment:
            <select required>
              <option value="" disabled>
                Select Education Level
              </option>
              {educationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Upload CV:
            <input type="file" accept=".pdf,.doc,.docx" />
          </label>
        </div>
        <div>
          <label>
            Upload Photo:
            <input type="file" accept="image/*" />
          </label>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default JobApplication;
