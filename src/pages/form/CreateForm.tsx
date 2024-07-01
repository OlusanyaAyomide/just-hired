import FormTSelectTemplate from "@/components/form/FormSelectTemplate"
import FormTemplateField from "@/components/form/FormTemplateField"
import Layout from "@/components/global/layout/Layout"
import { DynamicDefault, DynamicSelectDefault, DynamicSelectFields, IDynamicForm } from "@/interfaces/form-interface"
import { useState } from "react"


export default function CreateForm() {
    const [activeState,setActiveState] = useState<IDynamicForm>(DynamicDefault)
    const [selectedFields,setSelectedFields] = useState<DynamicSelectFields>(DynamicSelectDefault)

    return (
    <Layout title='Administration' content='Hello Helen, Welcome to Pronext'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Create Form</span>
            </div>
            <div className="py-2">
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="name"
                    fields={["first Name","Middle Name","Last Name"]}
                    title="Full Name"  
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="fullName"
                    fields={["full name"]}
                    title="Full Name"  
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="email"
                    fields={["email"]}
                    title="Email"  
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="phoneNumber"
                    fields={["phone number"]}
                    title="Phone Number"  
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="dateOfBirth"
                    fields={["Date Of Birth"]}
                    title="Date of birth"  
                    placeholder="DD/MM/YYY"
                />
                <FormTSelectTemplate
                    fieldName="maritalStatus"
                    activeState={activeState}
                    setActiveState={setActiveState}
                    selectedFields={selectedFields}
                    setSelectedFields={setSelectedFields}
                    title="Marital Status"
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="currentLocation"
                    fields={["currentLocation"]}
                    title="Current Location"  
                />
                <FormTSelectTemplate
                    fieldName="gender"
                    activeState={activeState}
                    setActiveState={setActiveState}
                    selectedFields={selectedFields}
                    setSelectedFields={setSelectedFields}
                    title="Gender"
                />
                <FormTemplateField
                    activeState={activeState}
                    setActiveState={setActiveState}
                    fieldName="city"
                    fields={["city"]}
                    title="City"  
                />
                <FormTSelectTemplate
                    fieldName="qualifications"
                    activeState={activeState}
                    setActiveState={setActiveState}
                    selectedFields={selectedFields}
                    setSelectedFields={setSelectedFields}
                    title="Qualifications"
                />

            </div>
            
        </div>
    </Layout>
    )
}


