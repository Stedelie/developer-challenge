import { TAG_AVAILABLE, TAG_COMING_SOON, TAG_SOLD_OUT } from "const/const";
import getTagForWork from "helpers/getTagForWork";

describe("return the right tag for work based on tags", () => {
    test("Given a Soldout tag is provided then the product should return a sold out tag.", () => {
        const tags = [TAG_AVAILABLE, TAG_SOLD_OUT, TAG_COMING_SOON]
        const result = getTagForWork(tags)

        expect(result).toBe(TAG_SOLD_OUT)
    });
});