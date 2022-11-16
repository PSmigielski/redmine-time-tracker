import {IssueType} from "./IssueType";

export type IssueRequestResponseType = {
    issues: Array<IssueType>;
    limit: number;
    offset: number;
    total_count: 1;
};

