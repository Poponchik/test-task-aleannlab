import { SETDATA } from "../typesRedux";

export function setJobInfo(jobInfo: any) {
  return {
    type: SETDATA,
    data: jobInfo,
  };
}
