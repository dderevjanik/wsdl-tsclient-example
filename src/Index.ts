import path from "path";
import { createClientAsync as createAccountClient } from "../generated/accountservice";
import { createClientAsync as createCompanyClient } from "../generated/companyservice";

(async function() {
    const accountClient = await createAccountClient(path.resolve("./resources/AccountService.wsdl"));
    const companyClient = await createCompanyClient(path.resolve("./resources/AccountService.wsdl"));

    accountClient.GetEntryIdAsync({ argEntryId: { date: "", entryNo: "", sortNo: "" }});
})();