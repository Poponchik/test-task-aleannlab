import styles from "../styles/jobBoard.module.css";
import { useState, useEffect } from "react";
import { Job } from "../types";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useDispatch} from "react-redux";
import { setJobInfo } from "../redux/actions/jobs";
import { formateDate } from "../utils";
import Pagination from "./Pagination";
import axios from "axios";
import config from '../config'

function JobBoard() {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();
  const limit = 10;

  async function getData() {
    const {data} = await axios.post(`${config.apiUrl}`)
    setJobs(data);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        {jobs
          .filter((_, index) => {  //couse of no pagination from backend side
            return index >= (currentPage - 1) * limit && index < currentPage * limit;
          })
          .map((job) => {
            return (
              <Link
                to={"/jobDetailed"}
                key={job.id}
                onClick={() => dispatch(setJobInfo(job))}
              >
                <div className={styles.job_bar}>
                  <div className={styles.content_div}>
                    <img
                      src={job.pictures[0]}
                      className={styles.job_image}
                    ></img>
                    <div className={styles.job_info}>
                      <h4 className={styles.job_title}>{job.title}</h4>
                      <p className={styles.hospital_name}>{job.name}</p>
                      <div className={styles.location_div}>
                        <MdLocationOn size={20} />
                        <p>{job.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.date_block}>
                    <BsBookmark className={styles.book_mark} size={28} />
                    <div className={styles.date_div}>
                      <p className={styles.date}>Posted</p>
                      <p className={styles.date}>
                        {formateDate(job.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
            <Pagination
              onPageChange={setCurrentPage}
              totalCount={jobs.length}
              siblingCount={1}
              currentPage={currentPage}
              pageSize={limit}
            />
      </div>
    </div>
  );
}

export default JobBoard;
