import { IAddEducationInterface } from "@/interfaces/educationInterface";
import * as yup from "yup"


export const addEducationSchema:yup.ObjectSchema<IAddEducationInterface> = yup.object({
    name: yup.string().required("Country flag is required"),
    valueNumber:yup.number().required(),
});

