import {IssueDataContent} from "./IssueDataContent";

export type IssueType = {
    assigned_to: IssueDataContent | null;
    author: IssueDataContent | null;
    closed_on: string | null;
    created_on: string | null;
    description: string | null;
    done_ratio: number | null;
    due_date: string | null
    estimated_hours: number | null
    id: number
    is_private: boolean | null
    priority: IssueDataContent | null;
    project: IssueDataContent | null;
    spent_hours: number
    start_date: string
    status: IssueDataContent | null;
    subject: string | null
    total_estimated_hours: number | null
    total_spent_hours: number | null
    tracker: IssueDataContent | null;
    updated_on: string
};