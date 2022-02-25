import { tell } from "../src/lodash-lib"
import moment from "moment"

describe("Dummy test", () => {
  it("Works if expected date is displayed", () => {
    expect(tell()).toEqual(moment().format("MMMM Do YYYY, h:mm:ss a"))
  })
})
