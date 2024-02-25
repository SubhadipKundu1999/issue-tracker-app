import { z } from "zod";
export const IssueSchema = z.object({

    title: z.string().min(1, { message: "Title is required" }).max(65535),
    description: z.string().min(3, { message: "Description is required" }).max(255)

})

export const pathIssueSchema = z.object({

    title: z
        .string()
        .min(1, { message: "Title is required" })
        .max(255)
        .optional(),
    description:
        z.string()
            .min(3, { message: "Description is required" })
            .max(65535)
            .optional(),
    assignedToUserId:
        z.string()
            .min(1, "AssignedToUserId is required")
            .max(255)
            .optional()
            .nullable()
})

