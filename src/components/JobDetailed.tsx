import styles from "../styles/jobDetailed.module.css";
import { BsBookmark } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { formateDate } from "../utils";
import config from "../config";

function JobDetailed() {
  const [description, setDescription] = useState<string[]>([]);
  const jobsInfo = useSelector((state: any) => state.jobsReducer);

  function getDescription() {
    const keywords = ["Responsopilities:", "Compensation & Benefits:"];

    const splitedDescription =
      jobsInfo?.description.split(new RegExp(keywords.join("|"), "g")) || [];
    
      setDescription(splitedDescription);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (jobsInfo) {
      getDescription();
    }
  }, [jobsInfo]);

  const containerStyle = {
    width: "384px",
    height: "220px",
    borderRadius: "0px 0px 8px 8px",
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.content_page}>
          <div className={styles.job_details}>
            <div className={styles.title_block}>
              <h1 className={styles.page_title}>Job Details</h1>
              <hr className={styles.adaptive_line} />

              <div className={styles.save_to_my_list}>
                <div className={styles.save_block}>
                  <BsBookmark size={20} />
                  <p>Save to my list</p>
                </div>
                <div className={styles.share_block}>
                  <BsFillShareFill size={20} />
                  <p>Share</p>
                </div>
              </div>
            </div>

            <hr className={styles.line_first} />
            <button className={styles.button_apply_now_adaptive}>
              APPLY NOW
            </button>
            <div className={styles.job_title_block}>
              <h2 className={styles.job_name}>{jobsInfo?.title}</h2>
              <div className={styles.salary_block}>
                <p className={styles.salary}>{jobsInfo.salary}</p>
                <p className={styles.per_year}>Brutto, per year</p>
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.date_block}>
                <p className={styles.date}>Posted</p>
                <p className={styles.date}>{formateDate(jobsInfo.time)}</p>
              </p>
              <div className={styles.adaptive_salary_block}>
                <p className={styles.per_year}>Brutto, per year</p>
                <p className={styles.salary}>{jobsInfo.salary}</p>
              </div>
            </div>
            <p className={styles.job_info}>{description[0]}</p>
            <p className={styles.info_title}>Responsopilities</p>
            <p className={styles.job_info}>{description[1]}</p>
            <p className={styles.info_title}>Compensation & Benefits:</p>
            <p className={styles.job_info}>{description[2]}</p>
            <button className={styles.button_apply_now}>APPLY NOW</button>
            <div className={styles.additional_info_block}>
              <h1 className={styles.page_title}>Additional info</h1>
              <hr className={styles.line} />
              <p className={styles.employment_type}>Employment type</p>
              <div className={styles.options}>
                {jobsInfo?.employment_type?.map((type: any) => {
                  return (
                    <div className={styles.option} key={type.id}>
                      {type}
                    </div>
                  );
                })}
              </div>
              <p className={styles.benefits}>Benefits</p>
              <div className={styles.options}>
                {jobsInfo?.benefits?.map((benefit: any) => {
                  return (
                    <div key={benefit.id} className={styles.benefit_option}>
                      <p>{benefit}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.attached_images_block}>
              <h1 className={styles.page_title}>Attached images</h1>
              <hr className={styles.line} />
              <div className={styles.images}>
                {jobsInfo?.pictures?.map((picture: string) => {
                  return (
                    <img src={picture} className={styles.attached_image} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.contacts_block}>
            <div className={styles.contacts_title}>
              <h1 className={styles.page_title}>Contacts</h1>
              <hr className={styles.line} />
            </div>
            <div className={styles.contacts_div}>
              <div className={styles.contacts}>
                <p className={styles.name}>{jobsInfo.name}</p>
                <div className={styles.contact_info}>
                  <MdLocationOn size={24} />
                  <p>{jobsInfo.address}</p>
                </div>
                <p className={styles.contact_info}>{jobsInfo.phone}</p>
                <p className={styles.contact_info}>{jobsInfo.email}</p>
              </div>
              <img
                className={styles.bg_contacts_image}
                src={`${config.ghHomepage}/images/ContactsDark.png`}
              ></img>
            </div>
            <div className={styles.map}>
              <LoadScript googleMapsApiKey="AIzaSyC2PQQirV54-FY-qfOqesaJKbsDMLv0gI0">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{
                    lat: jobsInfo.location.lat,
                    lng: jobsInfo.location.long,
                  }}
                  zoom={10}
                >
                  <MarkerF
                    position={{
                      lat: jobsInfo.location.lat,
                      lng: jobsInfo.location.long,
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className={styles.button_return}>
            <span className={styles.button_with_arrow}>
              <IoIosArrowBack size={28} />
              <p>RETURN TO JOB BOARD</p>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetailed;
