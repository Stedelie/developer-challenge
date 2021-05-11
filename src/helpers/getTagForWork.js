import { TAG_AVAILABLE, TAG_COMING_SOON, TAG_SOLD_OUT, TAG_DEFAULT } from "const/const";

const getTagForWork = tags => {
    if (tags.indexOf(TAG_SOLD_OUT) > -1) return TAG_SOLD_OUT;
    if (tags.indexOf(TAG_COMING_SOON) > -1) return TAG_COMING_SOON;
    if (tags.length === 1 && tags.indexOf(TAG_AVAILABLE) > -1) return TAG_AVAILABLE;

    return TAG_DEFAULT;
}

export default getTagForWork;