import { AttributeUidEnum } from "../enums/attribute";

export type Attribute = { uid: AttributeUid; name: string; abbreviation?: string; image_src?: string };
export type AttributeUid = typeof AttributeUidEnum[keyof typeof AttributeUidEnum];
