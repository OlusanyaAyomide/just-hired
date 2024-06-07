import { IAddCountryForm } from "@/interfaces/countryinterface";
import * as yup from "yup"


export const addCountrySchema:yup.ObjectSchema<IAddCountryForm> = yup.object({
    flag: yup.string().required("Country flag is required"),
    countryName:yup.string().required(),
    continent:yup.string().required(),
    additionalNote:yup.string().required()
});

