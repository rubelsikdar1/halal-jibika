import styles from "./AddOrEdit.module.css";

const AddOrEdit = ({ lable, heading,buttoName,register,handleSubmit,onSubmit }) => {
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.title}>{heading}</div>
          <div className={styles.content}>
            <form action="#" onSubmit={ handleSubmit(onSubmit)}>
              <div className={styles["user-details"]}>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.title}</span>
                  <input type="text" placeholder={lable.title} {...register("title")} required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.companyName}</span>
                  <input
                    type="text"
                    placeholder={lable.companyName}
                    required
                    {...register("companyName")}
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.posstion}</span>
                  <input type="text" placeholder={lable.posstion} {...register("posstion")} required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.despription}</span>
                  <input type="text" placeholder={lable.despription} {...register("despription")} required />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.logo}</span>
                  <input
                    type="text"
                    placeholder={lable.logo}
                    {...register("logo")}
                    required
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.address}</span>
                  <input
                    type="text"
                    placeholder={lable.address}
                    required
                    {...register("address")}
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.contact}</span>
                  <input
                    type="text"
                    placeholder={lable.contact}
                    required
                    {... register("contact")}
                  />
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.details}>{lable.sallery}</span>
                  <input
                    type="text"
                    placeholder={lable.sallery}
                    required
                    {...register("sallery")}
                  />
                </div>
              </div>
              {/* <div className={styles["gender-details"]}>
                <input type="radio" name="gender" id={styles["dot-1"]} />
                <input type="radio" name="gender" id={styles["dot-2"]} />
                <input type="radio" name="gender" id={styles["dot-3"]} />
                <span className={styles["gender-title"]}>Gender</span>
                <div className={styles["category"]}>
                  <label htmlFor={styles["dot-1"]}>
                    <span className={`${styles.dot} ${styles.one}`}></span>
                    <span className={styles.gender}>Male</span>
                  </label>
                  <label htmlFor={styles["dot-2"]}>
                    <span className={`${styles.dot} ${styles.two}`}></span>
                    <span className={styles.gender}>Female</span>
                  </label>
                  <label htmlFor={styles["dot-3"]}>
                    <span className={`${styles.dot} ${styles.three}`}></span>
                    <span className={styles.gender}>Prefer not to say</span>
                  </label>
                </div>
              </div> */}
              <div className={styles.button}>
                <input type="submit" value={buttoName} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrEdit;
